import type { ActivityType as PrismaActivityType } from "@/generated/prisma";

import {
  activityRepository,
  interviewRepository,
  jobApplicationRepository,
  jobListingRepository,
  REQUIRED_SECTION_TYPES,
  resumeRepository,
  SECTION_LABELS,
} from "../repositories/dashboard.repository";

export interface DashboardStatDto {
  id: string;
  label: string;
  value: number;
  change: number;
  trend: number[];
  format?: "number" | "percent";
}

export interface DashboardOverviewDto {
  stats: DashboardStatDto[];
  resumeProgress: {
    completion: number;
    atsScore: number;
    suggestions: string[];
    missingSections: string[];
    atsTips: string[];
    resumeId: string | null;
    resumeTitle: string | null;
  };
  recentResumes: {
    id: string;
    name: string;
    template: string;
    atsScore: number;
    updatedAt: string;
    status: string;
  }[];
  recommendedJobs: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string | null;
    isRemote: boolean;
  }[];
  activities: {
    id: string;
    type: string;
    title: string;
    description: string;
    timestamp: string;
  }[];
}

const ATS_TIPS = [
  "Use standard section headings like 'Experience' and 'Education'.",
  "Avoid tables and graphics that ATS systems cannot parse.",
  "Save your resume as PDF with selectable text.",
  "Include keywords from the job description naturally in your content.",
];

const DEFAULT_SUGGESTIONS = [
  "Create your first resume to unlock AI-powered suggestions.",
  "Choose a template that matches your target industry.",
  "Add quantifiable achievements to stand out to recruiters.",
];

function getMonthRange(offsetMonths: number) {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() + offsetMonths, 1);
  const end = new Date(now.getFullYear(), now.getMonth() + offsetMonths + 1, 1);
  return { start, end };
}

function calculatePercentChange(current: number, previous: number) {
  if (previous === 0) {
    return current > 0 ? 100 : 0;
  }

  return Number((((current - previous) / previous) * 100).toFixed(1));
}

function buildDailyTrend(
  records: { createdAt?: Date; appliedAt?: Date }[],
  days: number,
  dateKey: "createdAt" | "appliedAt" = "createdAt",
) {
  const trend: number[] = [];
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  for (let i = days - 1; i >= 0; i--) {
    const dayStart = new Date(today);
    dayStart.setHours(0, 0, 0, 0);
    dayStart.setDate(dayStart.getDate() - i);

    const dayEnd = new Date(dayStart);
    dayEnd.setHours(23, 59, 59, 999);

    const count = records.filter((record) => {
      const date = record[dateKey];
      return date && date >= dayStart && date <= dayEnd;
    }).length;

    trend.push(count);
  }

  return trend;
}

function mapActivityType(type: PrismaActivityType): string {
  const map: Record<PrismaActivityType, string> = {
    RESUME_CREATED: "resume_created",
    RESUME_UPDATED: "resume_updated",
    RESUME_DOWNLOADED: "resume_downloaded",
    ATS_IMPROVED: "ats_improved",
    JOB_APPLIED: "job_applied",
    JOB_SAVED: "job_saved",
    INTERVIEW_SCHEDULED: "interview_scheduled",
    INTERVIEW_COMPLETED: "interview_completed",
    PROFILE_UPDATED: "profile_updated",
  };

  return map[type];
}

function computeResumeProgress(resume: Awaited<
  ReturnType<typeof resumeRepository.getLatestWithSections>
>) {
  if (!resume) {
    return {
      completion: 0,
      atsScore: 0,
      suggestions: DEFAULT_SUGGESTIONS,
      missingSections: REQUIRED_SECTION_TYPES.map((type) => SECTION_LABELS[type]),
      atsTips: ATS_TIPS,
      resumeId: null,
      resumeTitle: null,
    };
  }

  const presentTypes = new Set(resume.sections.map((section) => section.type));
  const missingTypes = REQUIRED_SECTION_TYPES.filter(
    (type) => !presentTypes.has(type),
  );

  const completion =
    resume.completionPercent > 0
      ? resume.completionPercent
      : Math.round(
          ((REQUIRED_SECTION_TYPES.length - missingTypes.length) /
            REQUIRED_SECTION_TYPES.length) *
            100,
        );

  const suggestions: string[] = [];

  if (missingTypes.includes("EXPERIENCE")) {
    suggestions.push("Add work experience with measurable achievements.");
  }

  if (missingTypes.includes("SKILLS")) {
    suggestions.push("Include a skills section with industry-relevant keywords.");
  }

  if (missingTypes.includes("SUMMARY")) {
    suggestions.push("Write a compelling professional summary at the top.");
  }

  if (resume.atsScore < 80) {
    suggestions.push("Run the ATS optimizer to improve your resume score.");
  }

  if (suggestions.length === 0) {
    suggestions.push("Your resume looks strong. Consider tailoring it for each job.");
    suggestions.push("Keep your experience section updated with recent projects.");
  }

  return {
    completion,
    atsScore: resume.atsScore,
    suggestions: suggestions.slice(0, 3),
    missingSections: missingTypes.map((type) => SECTION_LABELS[type]),
    atsTips: ATS_TIPS,
    resumeId: resume.id,
    resumeTitle: resume.title,
  };
}

export class DashboardService {
  async getOverview(userId: string): Promise<DashboardOverviewDto> {
    const thisMonth = getMonthRange(0);
    const lastMonth = getMonthRange(-1);

    const [
      totalResumes,
      resumesThisMonth,
      resumesLastMonth,
      resumeDailyRecords,
      totalApplications,
      applicationsThisMonth,
      applicationsLastMonth,
      applicationDailyRecords,
      totalInterviews,
      interviewsThisMonth,
      interviewsLastMonth,
      interviewDailyRecords,
      avgAts,
      recentResumes,
      latestResume,
      recommendedJobs,
      activities,
    ] = await Promise.all([
      resumeRepository.countByUser(userId),
      resumeRepository.countByUserInRange(
        userId,
        thisMonth.start,
        thisMonth.end,
      ),
      resumeRepository.countByUserInRange(
        userId,
        lastMonth.start,
        lastMonth.end,
      ),
      resumeRepository.getDailyCounts(userId, 7),
      jobApplicationRepository.countByUser(userId),
      jobApplicationRepository.countByUserInRange(
        userId,
        thisMonth.start,
        thisMonth.end,
      ),
      jobApplicationRepository.countByUserInRange(
        userId,
        lastMonth.start,
        lastMonth.end,
      ),
      jobApplicationRepository.getDailyCounts(userId, 7),
      interviewRepository.countByUser(userId),
      interviewRepository.countByUserInRange(
        userId,
        thisMonth.start,
        thisMonth.end,
      ),
      interviewRepository.countByUserInRange(
        userId,
        lastMonth.start,
        lastMonth.end,
      ),
      interviewRepository.getDailyCounts(userId, 7),
      resumeRepository.getAverageAtsScore(userId),
      resumeRepository.getRecent(userId, 5),
      resumeRepository.getLatestWithSections(userId),
      jobListingRepository.getRecommended(userId, 6),
      activityRepository.getRecent(userId, 8),
    ]);

    const atsScore = Math.round(avgAts._avg.atsScore ?? 0);

    const stats: DashboardStatDto[] = [
      {
        id: "total-resumes",
        label: "Total Resumes",
        value: totalResumes,
        change: calculatePercentChange(resumesThisMonth, resumesLastMonth),
        trend: buildDailyTrend(resumeDailyRecords, 7),
      },
      {
        id: "applications",
        label: "Applications",
        value: totalApplications,
        change: calculatePercentChange(
          applicationsThisMonth,
          applicationsLastMonth,
        ),
        trend: buildDailyTrend(applicationDailyRecords, 7, "appliedAt"),
      },
      {
        id: "ats-score",
        label: "Avg ATS Score",
        value: atsScore,
        change: 0,
        trend: [0, 0, 0, 0, 0, 0, atsScore],
        format: "percent",
      },
      {
        id: "interviews",
        label: "Interviews",
        value: totalInterviews,
        change: calculatePercentChange(
          interviewsThisMonth,
          interviewsLastMonth,
        ),
        trend: buildDailyTrend(interviewDailyRecords, 7),
      },
    ];

    return {
      stats,
      resumeProgress: computeResumeProgress(latestResume),
      recentResumes: recentResumes.map((resume) => ({
        id: resume.id,
        name: resume.title,
        template: resume.template?.name ?? "No template",
        atsScore: resume.atsScore,
        updatedAt: resume.updatedAt.toISOString(),
        status: resume.status,
      })),
      recommendedJobs: recommendedJobs.map((job) => ({
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
        isRemote: job.isRemote,
      })),
      activities: activities.map((activity) => ({
        id: activity.id,
        type: mapActivityType(activity.type),
        title: activity.title,
        description: activity.description ?? "",
        timestamp: activity.createdAt.toISOString(),
      })),
    };
  }

  async getStats(userId: string) {
    const overview = await this.getOverview(userId);
    return overview.stats;
  }

  async getActivities(userId: string, limit = 10) {
    const activities = await activityRepository.getRecent(userId, limit);

    return activities.map((activity) => ({
      id: activity.id,
      type: mapActivityType(activity.type),
      title: activity.title,
      description: activity.description ?? "",
      timestamp: activity.createdAt.toISOString(),
    }));
  }
}

export const dashboardService = new DashboardService();
