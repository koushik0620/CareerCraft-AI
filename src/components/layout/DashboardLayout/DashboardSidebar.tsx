"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Sparkles } from "lucide-react";

import {
  dashboardBottomNavigation,
  dashboardNavigation,
} from "@/config/dashboard-navigation";

import Logo from "@/components/common/Logo";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-border bg-background lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-border px-6">
        <Logo />
      </div>

      {/* AI Banner */}
      <div className="px-4 pt-5">
        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/15 via-fuchsia-500/10 to-transparent p-4">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
            <Sparkles className="h-5 w-5 text-violet-400" />
          </div>

          <h3 className="font-semibold text-foreground">CareerCraft AI</h3>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Build ATS-friendly resumes and land interviews faster with AI.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Main Menu
        </p>

        <div className="space-y-1">
          {dashboardNavigation.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                <Icon
                  className={clsx(
                    "h-5 w-5 transition-transform duration-200",
                    !active && "group-hover:scale-110",
                  )}
                />

                <span className="flex-1">{item.title}</span>

                {active && <div className="h-2 w-2 rounded-full bg-white" />}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border p-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Account
        </p>

        <div className="space-y-1">
          {dashboardBottomNavigation.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            const destructive = item.title.toLowerCase().includes("logout");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  destructive
                    ? "text-red-400 hover:bg-red-500/10 hover:text-red-300"
                    : active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5" />

                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
