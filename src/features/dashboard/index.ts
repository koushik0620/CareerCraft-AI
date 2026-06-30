export { default as DashboardHome } from "./components/DashboardHome";
export { default as DashboardSkeleton } from "./components/DashboardSkeleton";
export { default as GreetingCard } from "./components/GreetingCard";
export { default as StatsCard } from "./components/StatsCard";
export { default as StatsGrid } from "./components/StatsGrid";
export { default as ATSCard } from "./components/ATSCard";
export { default as ResumeProgress } from "./components/ResumeProgress";
export { default as RecentResumeTable } from "./components/RecentResumeTable";
export { default as RecommendedJobs } from "./components/RecommendedJobs";
export { default as ActivityTimeline } from "./components/ActivityTimeline";
export { default as QuickActions } from "./components/QuickActions";
export { default as DashboardHeader } from "./components/DashboardHeader";

export { useDashboardData } from "./hooks/useDashboardData";
export { useGreeting } from "./hooks/useGreeting";
export { dashboardService } from "./services/dashboard.service";

export type {
  DashboardOverview,
  DashboardStatDto,
  ResumeItem,
  ResumeProgressData,
  RecommendedJob,
  ActivityItem,
  QuickAction,
} from "./types/dashboard";
