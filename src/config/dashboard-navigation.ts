import {
  BarChart3,
  BriefcaseBusiness,
  ClipboardList,
  FileText,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  Sparkles,
  Target,
  User,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export interface DashboardNavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  action?: "logout";
}

export interface DashboardNavSection {
  title: string;
  items: DashboardNavItem[];
}

export const dashboardNavSections: DashboardNavSection[] = [
  {
    title: "General",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "AI Tools",
    items: [
      {
        title: "AI Resume Builder",
        href: "/dashboard/ai-resume-builder",
        icon: Sparkles,
      },
      {
        title: "Resume Optimizer",
        href: "/dashboard/resume-optimizer",
        icon: Wand2,
      },
      {
        title: "ATS Score",
        href: "/dashboard/ats-score",
        icon: Target,
      },
      {
        title: "Resume Templates",
        href: "/dashboard/templates",
        icon: FileText,
      },
    ],
  },
  {
    title: "Career",
    items: [
      {
        title: "Job Search",
        href: "/dashboard/jobs",
        icon: Search,
      },
      {
        title: "Applications",
        href: "/dashboard/applications",
        icon: ClipboardList,
      },
      {
        title: "Interview Preparation",
        href: "/dashboard/interview-prep",
        icon: MessageSquare,
      },
    ],
  },
];

export const dashboardAccountNav: DashboardNavItem[] = [
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
  {
    title: "Logout",
    href: "/logout",
    icon: LogOut,
    action: "logout",
  },
];

/** @deprecated Use dashboardNavSections */
export const dashboardNavigation = dashboardNavSections.flatMap(
  (section) => section.items,
);

/** @deprecated Use dashboardAccountNav */
export const dashboardBottomNavigation = dashboardAccountNav;
