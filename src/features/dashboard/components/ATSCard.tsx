"use client";

import { memo } from "react";

import { cn } from "@/lib/utils";

interface ATSCardProps {
  score: number;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZE_MAP = {
  sm: { dimension: 96, stroke: 6, text: "text-xl" },
  md: { dimension: 128, stroke: 8, text: "text-2xl" },
  lg: { dimension: 160, stroke: 10, text: "text-3xl" },
} as const;

function ATSCardComponent({
  score,
  label = "ATS Score",
  size = "md",
  className,
}: ATSCardProps) {
  const { dimension, stroke, text } = SIZE_MAP[size];
  const radius = (dimension - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const scoreColor =
    score >= 85
      ? "text-emerald-500"
      : score >= 70
        ? "text-amber-500"
        : "text-destructive";

  return (
    <div
      className={cn("relative inline-flex flex-col items-center", className)}
      role="img"
      aria-label={`${label}: ${score} percent`}
    >
      <svg
        width={dimension}
        height={dimension}
        className="-rotate-90"
        aria-hidden
      >
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-muted"
        />
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn("transition-all duration-700", scoreColor)}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={cn("font-semibold tracking-tight", text)}>
          {score}%
        </span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}

export default memo(ATSCardComponent);
