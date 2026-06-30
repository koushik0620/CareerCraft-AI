"use client";

import Link from "next/link";
import { memo } from "react";

import { QUICK_ACTIONS } from "../constants/dashboard";

import { cn } from "@/lib/utils";

function QuickActionsComponent() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {QUICK_ACTIONS.map((action) => {
        const Icon = action.icon;

        return (
          <Link
            key={action.id}
            href={action.href}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-lg border border-border/70 bg-card px-3.5 py-2 text-sm font-medium shadow-sm transition-all duration-150",
              "hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
              "focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
            )}
          >
            <Icon className="size-4 text-muted-foreground" aria-hidden />
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}

export default memo(QuickActionsComponent);
