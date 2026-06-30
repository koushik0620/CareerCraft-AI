"use client";

import { formatDistanceToNow } from "date-fns";
import { memo } from "react";

import { ACTIVITY_COLORS, ACTIVITY_ICONS } from "../constants/dashboard";
import type { ActivityItem } from "../types/dashboard";

import DashboardHeader from "./DashboardHeader";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ActivityTimelineProps {
  activities: ActivityItem[];
}

function ActivityTimelineComponent({ activities }: ActivityTimelineProps) {
  if (activities.length === 0) {
    return (
      <Card className="border-border/60">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-sm font-medium">No recent activity</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Your actions will appear here as you use CareerCraft AI.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/60">
      <CardContent className="pt-4">
        <DashboardHeader
          title="Recent Activity"
          description="Your latest actions across the platform"
        />

        <ol className="relative mt-6 space-y-0" aria-label="Recent activity">
          {activities.map((activity, index) => {
            const type = activity.type as ActivityItem["type"];
            const Icon = ACTIVITY_ICONS[type];
            const colorClass = ACTIVITY_COLORS[type];
            const isLast = index === activities.length - 1;

            return (
              <li key={activity.id} className="relative flex gap-4 pb-8">
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute top-10 left-5 h-[calc(100%-2rem)] w-px bg-border"
                  />
                )}

                <div
                  className={cn(
                    "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl",
                    colorClass,
                  )}
                >
                  <Icon className="size-4" aria-hidden />
                </div>

                <div className="min-w-0 flex-1 pt-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <time
                      dateTime={activity.timestamp}
                      className="text-xs text-muted-foreground"
                    >
                      {formatDistanceToNow(new Date(activity.timestamp), {
                        addSuffix: true,
                      })}
                    </time>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}

export default memo(ActivityTimelineComponent);
