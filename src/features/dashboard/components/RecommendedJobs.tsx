"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Building2, MapPin } from "lucide-react";
import { memo } from "react";
import { toast } from "sonner";

import type { RecommendedJob } from "../types/dashboard";
import { dashboardService } from "../services/dashboard.service";

import DashboardHeader from "./DashboardHeader";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QUERY_KEYS } from "@/lib/react-query/query-keys";
import { cn } from "@/lib/utils";

interface RecommendedJobsProps {
  jobs: RecommendedJob[];
}

function RecommendedJobsComponent({ jobs }: RecommendedJobsProps) {
  const queryClient = useQueryClient();

  const applyMutation = useMutation({
    mutationFn: (jobId: string) => dashboardService.applyToJob(jobId),
    onSuccess: () => {
      toast.success("Application submitted");
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.DASHBOARD.OVERVIEW });
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast.error(error?.response?.data?.message ?? "Failed to apply");
    },
  });

  if (jobs.length === 0) {
    return (
      <Card className="border-border/60 bg-card shadow-sm">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-sm font-medium">No job recommendations</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Check back soon for personalized job matches.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <DashboardHeader
        title="Recommended Jobs"
        description="Curated opportunities based on your profile"
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job) => (
          <Card
            key={job.id}
            className={cn(
              "border-border/60 bg-card shadow-sm transition-all duration-200",
              "hover:-translate-y-0.5 hover:shadow-md",
            )}
          >
            <CardContent className="pt-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Building2 className="size-4" aria-hidden />
                </div>
                {job.isRemote && (
                  <Badge variant="secondary" className="shrink-0">
                    Remote
                  </Badge>
                )}
              </div>

              <h3 className="mt-4 font-semibold tracking-tight">{job.title}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {job.company}
              </p>

              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 shrink-0" aria-hidden />
                  {job.location}
                </span>
                {job.salary && (
                  <span className="block font-medium text-foreground">
                    {job.salary}
                  </span>
                )}
              </div>

              <Button
                className="mt-4 w-full rounded-lg"
                variant="outline"
                disabled={applyMutation.isPending}
                onClick={() => applyMutation.mutate(job.id)}
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default memo(RecommendedJobsComponent);
