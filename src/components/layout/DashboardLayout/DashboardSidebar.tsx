"use client";

import DashboardSidebarNav from "./DashboardSidebarNav";

export default function DashboardSidebar() {
  return (
    <aside
      aria-label="Sidebar"
      className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-sidebar-border lg:block"
    >
      <DashboardSidebarNav />
    </aside>
  );
}
