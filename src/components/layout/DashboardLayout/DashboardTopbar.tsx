"use client";

import { Bell, Menu, Search } from "lucide-react";
import Link from "next/link";
import { memo, useState } from "react";

import ThemeToggle from "@/components/common/ThemeToggle";
import UserMenu from "@/components/layout/UserMenu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGreeting } from "@/features/dashboard/hooks/useGreeting";

import DashboardSidebarNav from "./DashboardSidebarNav";

interface DashboardTopbarProps {
  breadcrumb?: {
    label: string;
    href?: string;
  };
}

function DashboardTopbar({ breadcrumb }: DashboardTopbarProps) {
  const { message } = useGreeting();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="flex h-14 items-center gap-3 px-4 lg:px-6">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-sm"
                className="rounded-lg lg:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>

          <SheetContent side="left" className="w-72 p-0" showCloseButton>
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <DashboardSidebarNav onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>

        <div className="min-w-0 flex-1">
          <Breadcrumb className="hidden md:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/dashboard" />}>
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumb && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {breadcrumb.href ? (
                      <BreadcrumbLink render={<Link href={breadcrumb.href} />}>
                        {breadcrumb.label}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>

          <p className="truncate text-sm font-semibold md:hidden">{message}</p>
        </div>

        <div className="hidden flex-1 justify-center px-4 lg:flex">
          <p className="text-sm font-medium text-foreground">{message}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search
              aria-hidden
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              placeholder="Search..."
              aria-label="Search dashboard"
              className="h-9 w-44 rounded-lg border-border/70 bg-muted/40 pl-9 lg:w-56"
            />
          </div>

          <ThemeToggle />

          <Button
            variant="outline"
            size="icon-sm"
            className="relative rounded-lg"
            aria-label="Notifications"
          >
            <Bell className="size-4" />
            <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-primary" />
          </Button>

          <UserMenu />
        </div>
      </div>
    </header>
  );
}

export default memo(DashboardTopbar);
