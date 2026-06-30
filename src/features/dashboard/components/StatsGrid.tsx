"use client";

import { memo } from "react";

import type { DashboardStatDto } from "../types/dashboard";

import StatsCard from "./StatsCard";

interface StatsGridProps {
  stats: DashboardStatDto[];
}

function StatsGridComponent({ stats }: StatsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <StatsCard key={stat.id} stat={stat} index={index} />
      ))}
    </div>
  );
}

export default memo(StatsGridComponent);
