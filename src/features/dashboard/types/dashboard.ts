export interface DashboardStatDto {
  id: string;
  label: string;
  value: number;
  change: number;
  trend: number[];
  format?: "number" | "percent";
}

export interface ResumeItem {
  id: string;
  name: string;
  template: string;
  atsScore: number;
  updatedAt: string;
  status: string;
}

export interface ResumeProgressData {
  completion: number;
  atsScore: number;
  suggestions: string[];
  missingSections: string[];
  atsTips: string[];
  resumeId: string | null;
  resumeTitle: string | null;
}

export interface RecommendedJob {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string | null;
  isRemote: boolean;
}

export type ActivityType =
  | "resume_created"
  | "resume_updated"
  | "resume_downloaded"
  | "ats_improved"
  | "job_applied"
  | "job_saved"
  | "interview_scheduled"
  | "interview_completed"
  | "profile_updated";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
}

export interface DashboardOverview {
  stats: DashboardStatDto[];
  resumeProgress: ResumeProgressData;
  recentResumes: ResumeItem[];
  recommendedJobs: RecommendedJob[];
  activities: ActivityItem[];
}

export interface QuickAction {
  id: string;
  label: string;
  href: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}
