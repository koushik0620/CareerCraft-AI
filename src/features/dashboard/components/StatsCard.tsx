"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { memo } from "react";

import { STAT_GRADIENTS, STAT_ICONS } from "../constants/dashboard";
import type { DashboardStatDto } from "../types/dashboard";

import MiniSparkline from "./MiniSparkline";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  stat: DashboardStatDto;
  index: number;
}

function StatsCardComponent({ stat, index }: StatsCardProps) {
  const Icon = STAT_ICONS[stat.id] ?? STAT_ICONS["total-resumes"];
  const isPositive = stat.change >= 0;
  const gradient = STAT_GRADIENTS[index % STAT_GRADIENTS.length];

  const formattedValue =
    stat.format === "percent" ? `${stat.value}%` : stat.value.toLocaleString();

  return (
    <Card className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70",
          gradient,
        )}
      />

      <CardContent className="relative pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-4" aria-hidden />
          </div>
          <MiniSparkline data={stat.trend} />
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium text-muted-foreground">
            {stat.label}
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            {formattedValue}
          </p>
        </div>

        <div className="mt-3 flex items-center gap-1.5">
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[11px] font-medium",
              isPositive
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "bg-destructive/10 text-destructive",
            )}
          >
            {isPositive ? (
              <ArrowUpRight className="size-3" aria-hidden />
            ) : (
              <ArrowDownRight className="size-3" aria-hidden />
            )}
            {Math.abs(stat.change)}%
          </span>
          <span className="text-[11px] text-muted-foreground">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default memo(StatsCardComponent);
