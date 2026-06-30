"use client";

import { ReactNode } from "react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <DashboardTopbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
