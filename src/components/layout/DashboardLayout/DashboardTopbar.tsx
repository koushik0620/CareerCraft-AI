"use client";

import { Bell, Search } from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";
import UserMenu from "@/components/layout/UserMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Left */}
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Dashboard
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            Welcome back 👋
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative hidden w-80 xl:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search resumes, jobs, AI..."
              className="h-11 rounded-xl pl-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
