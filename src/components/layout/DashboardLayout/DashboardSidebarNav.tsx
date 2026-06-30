"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import {
  dashboardAccountNav,
  dashboardNavSections,
  type DashboardNavItem,
} from "@/config/dashboard-navigation";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { useAppSelector } from "@/store/hooks";

import Logo from "@/components/common/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface DashboardSidebarNavProps {
  onNavigate?: () => void;
}

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  item,
  active,
  onNavigate,
}: {
  item: DashboardNavItem;
  active: boolean;
  onNavigate?: () => void;
}) {
  const logoutMutation = useLogout();
  const Icon = item.icon;
  const isLogout = item.action === "logout";

  const className = cn(
    "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-150",
    isLogout
      ? "text-destructive hover:bg-destructive/8"
      : active
        ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm ring-1 ring-sidebar-border"
        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground",
  );

  const content = (
    <>
      <Icon
        className={cn(
          "size-4 shrink-0",
          active && !isLogout && "text-primary",
        )}
        aria-hidden
      />
      <span className="flex-1 text-left">{item.title}</span>
    </>
  );

  if (isLogout) {
    return (
      <button
        type="button"
        aria-label="Logout"
        disabled={logoutMutation.isPending}
        onClick={() => {
          logoutMutation.mutate();
          onNavigate?.();
        }}
        className={className}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={item.href} onClick={onNavigate} className={className}>
      {content}
    </Link>
  );
}

function DashboardSidebarNav({ onNavigate }: DashboardSidebarNavProps) {
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex h-14 shrink-0 items-center border-b border-sidebar-border px-5">
        <Logo />
      </div>

      <nav
        aria-label="Dashboard navigation"
        className="flex-1 space-y-6 overflow-y-auto px-3 py-4"
      >
        {dashboardNavSections.map((section) => (
          <div key={section.title}>
            <p className="mb-1.5 px-3 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {section.title}
            </p>

            <div className="space-y-0.5">
              {section.items.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  active={isActive(pathname, item.href)}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="shrink-0 border-t border-sidebar-border p-3">
        <p className="mb-1.5 px-3 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          Account
        </p>

        <div className="mb-3 space-y-0.5">
          {dashboardAccountNav.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              active={isActive(pathname, item.href)}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {user && (
          <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent/60 p-3 ring-1 ring-sidebar-border/80">
            <Avatar className="size-9">
              <AvatarImage src={user.avatar ?? ""} alt="" />
              <AvatarFallback className="bg-primary/10 text-xs text-primary">
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">
                {user.firstName} {user.lastName}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(DashboardSidebarNav);
