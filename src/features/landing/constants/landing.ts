import {
  Bot,
  FileCheck,
  LayoutTemplate,
  Sparkles,
  ScanSearch,
  Download,
  Upload,
  Check,
} from "lucide-react";

export const heroContent = {
  badge: "✨ AI-Powered Resume Builder",

  title: {
    first: "Build ATS-Friendly",
    second: "Resumes with",
    highlight: "AI",
  },

  description:
    "Create professional resumes in minutes. Improve your ATS score, generate compelling content with AI, and land more interviews.",

  primaryButton: "Start Building Free",

  secondaryButton: "View Templates",

  stats: [
    {
      value: "100K+",
      label: "Resumes Created",
    },
    {
      value: "95%",
      label: "ATS Success",
    },
    {
      value: "50+",
      label: "Templates",
    },
    {
      value: "24/7",
      label: "AI Assistant",
    },
  ],
};

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "OpenAI",
  "Prisma",
  "PostgreSQL",
  "Vercel",
];

export const features = [
  {
    icon: Bot,
    title: "AI Resume Builder",
    description:
      "Generate professional resume content using advanced AI assistance.",
  },
  {
    icon: FileCheck,
    title: "ATS Optimization",
    description:
      "Improve your resume score and increase your chances of getting shortlisted.",
  },
  {
    icon: LayoutTemplate,
    title: "Modern Templates",
    description: "Choose from beautiful, recruiter-friendly resume templates.",
  },
  {
    icon: Sparkles,
    title: "AI Content Enhancement",
    description:
      "Rewrite summaries, achievements and experience with one click.",
  },
  {
    icon: ScanSearch,
    title: "Job Match Analysis",
    description:
      "Compare your resume against a job description and identify missing skills.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Download your resume as PDF and share it instantly.",
  },
];

export const templates = [
  {
    id: 1,
    title: "ATS Professional",
    description: "Designed for maximum ATS compatibility.",
    popular: true,
  },
  {
    id: 2,
    title: "Modern",
    description: "Clean and elegant design for modern careers.",
    popular: false,
  },
  {
    id: 3,
    title: "Executive",
    description: "Perfect for senior professionals.",
    popular: false,
  },
];

export const howItWorks = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Resume",
    description: "Start from scratch or upload your existing resume.",
  },
  {
    icon: Bot,
    step: "02",
    title: "Let AI Optimize It",
    description:
      "AI rewrites your content, improves ATS score and enhances every section.",
  },
  {
    icon: Download,
    step: "03",
    title: "Download & Apply",
    description:
      "Export a polished ATS-friendly resume and start applying confidently.",
  },
];

export const testimonials = [
  {
    name: "Alex Johnson",
    role: "Frontend Engineer",
    company: "Tech Startup",
    review:
      "CareerCraft AI completely transformed my resume. I started getting interview calls within a week.",
    rating: 5,
  },
  {
    name: "Sarah Wilson",
    role: "UI/UX Designer",
    company: "Creative Studio",
    review:
      "The AI suggestions made my resume much stronger. The templates are beautiful and ATS-friendly.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Software Engineer",
    company: "Product Company",
    review:
      "Best resume builder I've used. The ATS optimization feature is incredibly useful.",
    rating: 5,
  },
  {
    name: "Emily Brown",
    role: "Data Analyst",
    company: "Analytics Firm",
    review:
      "I landed interviews at multiple companies after using CareerCraft AI.",
    rating: 5,
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started.",
    highlighted: false,
    features: [
      "1 Resume",
      "Basic Templates",
      "PDF Export",
      "Limited AI Credits",
    ],
    button: "Get Started",
  },
  {
    name: "Pro",
    price: "$9",
    description: "Everything you need to land interviews.",
    highlighted: true,
    features: [
      "Unlimited Resumes",
      "Premium Templates",
      "Unlimited AI",
      "ATS Optimization",
      "Cover Letter Generator",
      "Priority Support",
    ],
    button: "Start Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For universities and organizations.",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Admin Dashboard",
      "Team Management",
      "Dedicated Support",
    ],
    button: "Contact Sales",
  },
];

export const faqs = [
  {
    question: "Is CareerCraft AI free to use?",
    answer:
      "Yes. You can create and download resumes using the free plan. Upgrade anytime for premium AI features.",
  },
  {
    question: "Are the templates ATS-friendly?",
    answer:
      "Yes. Every template is designed to work well with Applicant Tracking Systems.",
  },
  {
    question: "Can I customize my resume?",
    answer:
      "Absolutely. Fonts, colors, layouts, spacing, and sections can all be customized.",
  },
  {
    question: "Can AI rewrite my resume?",
    answer:
      "Yes. AI can improve summaries, work experience, skills, and achievements with one click.",
  },
  {
    question: "Can I export as PDF?",
    answer: "Yes. Export your resume as a high-quality PDF anytime.",
  },
];
