"use client";

import { AlertCircle, CheckCircle2, Lightbulb, Sparkles } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

import type { ResumeProgressData } from "../types/dashboard";

import ATSCard from "./ATSCard";
import DashboardHeader from "./DashboardHeader";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ResumeProgressProps {
  data: ResumeProgressData;
}

function CircularProgress({ value, label }: { value: number; label: string }) {
  const dimension = 120;
  const stroke = 8;
  const radius = (dimension - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className="relative inline-flex flex-col items-center"
      role="img"
      aria-label={`${label}: ${value} percent complete`}
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
          className="text-primary transition-all duration-700"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-semibold tracking-tight">{value}%</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}

function ResumeProgressComponent({ data }: ResumeProgressProps) {
  return (
    <Card className="border-border/60">
      <CardContent className="pt-4">
        <DashboardHeader
          title="Resume Completion"
          description="Track your progress and AI-powered improvements"
          action={
            <Button
              nativeButton={false}
              render={<Link href="/dashboard/resume-optimizer" />}
              size="sm"
              variant="outline"
              className="rounded-xl"
            >
              <Sparkles className="size-3.5" />
              Optimize
            </Button>
          }
        />

        <div className="mt-6 grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-start">
          <div className="flex justify-center">
            <CircularProgress value={data.completion} label="Completion" />
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-sm font-medium">
                <Sparkles className="size-4 text-primary" aria-hidden />
                AI Suggestions
              </h4>
              <ul className="space-y-2">
                {data.suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 flex items-center gap-2 text-sm font-medium">
                <AlertCircle className="size-4 text-amber-500" aria-hidden />
                Missing Sections
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.missingSections.map((section) => (
                  <Badge key={section} variant="outline">
                    {section}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:items-end">
            <ATSCard score={data.atsScore} size="sm" />

            <div className="w-full lg:max-w-xs">
              <h4 className="mb-2 flex items-center gap-2 text-sm font-medium">
                <Lightbulb className="size-4 text-primary" aria-hidden />
                ATS Tips
              </h4>
              <ul className="space-y-2">
                {data.atsTips.map((tip) => (
                  <li
                    key={tip}
                    className={cn(
                      "rounded-lg bg-muted/50 px-3 py-2 text-xs leading-relaxed text-muted-foreground",
                    )}
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default memo(ResumeProgressComponent);
