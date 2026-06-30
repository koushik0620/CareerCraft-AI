"use client";

import { memo, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

function DashboardHeaderComponent({
  title,
  description,
  action,
  className,
}: DashboardHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <div>
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export default memo(DashboardHeaderComponent);
