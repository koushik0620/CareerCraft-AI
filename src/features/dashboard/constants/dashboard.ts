import {
  Briefcase,
  Download,
  FileText,
  MessageSquare,
  Search,
  Sparkles,
  Target,
  User,
  Wand2,
  type LucideIcon,
} from "lucide-react";

import type { ActivityType, QuickAction } from "../types/dashboard";

export const DASHBOARD_QUERY_STALE_TIME = 1000 * 60 * 2;

export const STAT_ICONS: Record<string, LucideIcon> = {
  "total-resumes": FileText,
  applications: Briefcase,
  "ats-score": Target,
  interviews: MessageSquare,
};

export const QUICK_ACTIONS: (QuickAction & { icon: LucideIcon })[] = [
  {
    id: "create-resume",
    label: "New Resume",
    href: "/dashboard/ai-resume-builder",
    icon: FileText,
  },
  {
    id: "optimize-ats",
    label: "Optimize ATS",
    href: "/dashboard/resume-optimizer",
    icon: Wand2,
  },
  {
    id: "search-jobs",
    label: "Browse Jobs",
    href: "/dashboard/jobs",
    icon: Search,
  },
  {
    id: "interview-prep",
    label: "Practice Interview",
    href: "/dashboard/interview-prep",
    icon: MessageSquare,
  },
];

export const ACTIVITY_ICONS: Record<ActivityType, LucideIcon> = {
  resume_created: FileText,
  resume_updated: FileText,
  resume_downloaded: Download,
  ats_improved: Target,
  job_applied: Briefcase,
  job_saved: Sparkles,
  interview_scheduled: MessageSquare,
  interview_completed: MessageSquare,
  profile_updated: User,
};

export const ACTIVITY_COLORS: Record<ActivityType, string> = {
  resume_created: "text-chart-1 bg-chart-1/10",
  resume_updated: "text-chart-1 bg-chart-1/10",
  resume_downloaded: "text-chart-4 bg-chart-4/10",
  ats_improved: "text-chart-3 bg-chart-3/10",
  job_applied: "text-chart-2 bg-chart-2/10",
  job_saved: "text-chart-5 bg-chart-5/10",
  interview_scheduled: "text-chart-2 bg-chart-2/10",
  interview_completed: "text-chart-3 bg-chart-3/10",
  profile_updated: "text-primary bg-primary/10",
};

export const STAT_GRADIENTS = [
  "from-chart-1/15 via-chart-1/5 to-transparent",
  "from-chart-2/15 via-chart-2/5 to-transparent",
  "from-chart-3/15 via-chart-3/5 to-transparent",
  "from-chart-4/15 via-chart-4/5 to-transparent",
] as const;
