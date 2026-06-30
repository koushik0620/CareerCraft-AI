"use client";

import { ArrowRight, FileText, Search } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGreeting } from "../hooks/useGreeting";

function GreetingCardComponent() {
  const { firstName } = useGreeting();

  return (
    <Card className="overflow-hidden border-border/60 bg-card shadow-sm">
      <CardContent className="relative pt-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-primary/8 blur-3xl"
        />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary">Dashboard</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Welcome back, {firstName}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Continue building your career with AI-powered resumes, ATS
              optimization, and job tracking.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/dashboard/ai-resume-builder" />}
              className="rounded-lg"
            >
              <FileText />
              Create Resume
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/dashboard/jobs" />}
              variant="outline"
              className="rounded-lg"
            >
              <Search />
              Search Jobs
              <ArrowRight className="size-4 opacity-50" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default memo(GreetingCardComponent);
