"use client";

import FadeIn from "@/components/animations/FadeIn";

import { useDashboardData } from "../hooks/useDashboardData";

import ActivityTimeline from "./ActivityTimeline";
import DashboardSkeleton from "./DashboardSkeleton";
import GreetingCard from "./GreetingCard";
import QuickActions from "./QuickActions";
import RecentResumeTable from "./RecentResumeTable";
import RecommendedJobs from "./RecommendedJobs";
import ResumeProgress from "./ResumeProgress";
import StatsGrid from "./StatsGrid";

export default function DashboardHome() {
  const { data, isLoading, isError } = useDashboardData();

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError || !data) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border py-24 text-center">
        <p className="text-sm font-medium">Unable to load dashboard</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Please refresh the page or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <FadeIn>
        <GreetingCard />
      </FadeIn>

      <FadeIn delay={0.05}>
        <QuickActions />
      </FadeIn>

      <FadeIn delay={0.1}>
        <StatsGrid stats={data.stats} />
      </FadeIn>

      <FadeIn delay={0.15}>
        <ResumeProgress data={data.resumeProgress} />
      </FadeIn>

      <FadeIn delay={0.2}>
        <RecentResumeTable resumes={data.recentResumes} />
      </FadeIn>

      <div className="grid gap-8 xl:grid-cols-5">
        <FadeIn delay={0.25} className="xl:col-span-3">
          <RecommendedJobs jobs={data.recommendedJobs} />
        </FadeIn>

        <FadeIn delay={0.3} className="xl:col-span-2">
          <ActivityTimeline activities={data.activities} />
        </FadeIn>
      </div>
    </div>
  );
}
