import {
  LayoutDashboard,
  FileText,
  Sparkles,
  BriefcaseBusiness,
  User,
  Settings,
  LogOut,
  type LucideIcon,
} from "lucide-react";

export interface DashboardNavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const dashboardNavigation: DashboardNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Resumes",
    href: "/resumes",
    icon: FileText,
  },
  {
    title: "AI Tools",
    href: "/ai",
    icon: Sparkles,
  },
  {
    title: "Jobs",
    href: "/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const dashboardBottomNavigation: DashboardNavItem[] = [
  {
    title: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];
