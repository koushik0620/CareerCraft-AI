import type {
  ActivityType,
  Prisma,
  ResumeSectionType,
} from "@/generated/prisma";

import { prisma } from "../db/prisma";

export const REQUIRED_SECTION_TYPES: ResumeSectionType[] = [
  "PERSONAL_INFO",
  "SUMMARY",
  "EXPERIENCE",
  "EDUCATION",
  "SKILLS",
];

export const SECTION_LABELS: Record<ResumeSectionType, string> = {
  PERSONAL_INFO: "Personal Info",
  SUMMARY: "Summary",
  EXPERIENCE: "Experience",
  EDUCATION: "Education",
  SKILLS: "Skills",
  PROJECTS: "Projects",
  CERTIFICATIONS: "Certifications",
  ACHIEVEMENTS: "Achievements",
  LANGUAGES: "Languages",
  CUSTOM: "Custom",
};

export const resumeRepository = {
  countByUser(userId: string) {
    return prisma.resume.count({ where: { userId } });
  },

  countByUserInRange(userId: string, start: Date, end: Date) {
    return prisma.resume.count({
      where: {
        userId,
        createdAt: { gte: start, lt: end },
      },
    });
  },

  getDailyCounts(userId: string, days: number) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - (days - 1));

    return prisma.resume.findMany({
      where: {
        userId,
        createdAt: { gte: start },
      },
      select: { createdAt: true },
      orderBy: { createdAt: "asc" },
    });
  },

  getAverageAtsScore(userId: string) {
    return prisma.resume.aggregate({
      where: { userId, atsScore: { gt: 0 } },
      _avg: { atsScore: true },
    });
  },

  getRecent(userId: string, limit: number) {
    return prisma.resume.findMany({
      where: { userId },
      include: { template: true },
      orderBy: { updatedAt: "desc" },
      take: limit,
    });
  },

  getLatestWithSections(userId: string) {
    return prisma.resume.findFirst({
      where: { userId },
      include: { sections: true, template: true },
      orderBy: { updatedAt: "desc" },
    });
  },
};

export const jobApplicationRepository = {
  countByUser(userId: string) {
    return prisma.jobApplication.count({ where: { userId } });
  },

  countByUserInRange(userId: string, start: Date, end: Date) {
    return prisma.jobApplication.count({
      where: {
        userId,
        appliedAt: { gte: start, lt: end },
      },
    });
  },

  getDailyCounts(userId: string, days: number) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - (days - 1));

    return prisma.jobApplication.findMany({
      where: {
        userId,
        appliedAt: { gte: start },
      },
      select: { appliedAt: true },
      orderBy: { appliedAt: "asc" },
    });
  },

  getAppliedJobListingIds(userId: string) {
    return prisma.jobApplication.findMany({
      where: { userId, jobListingId: { not: null } },
      select: { jobListingId: true },
    });
  },
};

export const interviewRepository = {
  countByUser(userId: string) {
    return prisma.interview.count({ where: { userId } });
  },

  countByUserInRange(userId: string, start: Date, end: Date) {
    return prisma.interview.count({
      where: {
        userId,
        createdAt: { gte: start, lt: end },
      },
    });
  },

  getDailyCounts(userId: string, days: number) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - (days - 1));

    return prisma.interview.findMany({
      where: {
        userId,
        createdAt: { gte: start },
      },
      select: { createdAt: true },
      orderBy: { createdAt: "asc" },
    });
  },
};

export const activityRepository = {
  getRecent(userId: string, limit: number) {
    return prisma.activity.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  },

  create(data: {
    userId: string;
    type: ActivityType;
    title: string;
    description?: string;
    metadata?: Prisma.InputJsonValue;
  }) {
    return prisma.activity.create({ data });
  },
};

export const jobListingRepository = {
  getRecommended(userId: string, limit: number) {
    return prisma.jobListing.findMany({
      where: {
        isActive: true,
        applications: { none: { userId } },
      },
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  },
};
