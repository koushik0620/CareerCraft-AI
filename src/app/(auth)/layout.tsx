import { ReactNode } from "react";
import { Sparkles, Target, Wand2, Zap } from "lucide-react";

import Logo from "@/components/common/Logo";

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI Resume Builder",
    description: "Generate professional resumes in minutes.",
  },
  {
    icon: Target,
    title: "ATS Optimization",
    description: "Score and improve your resume for recruiters.",
  },
  {
    icon: Wand2,
    title: "Smart Templates",
    description: "Premium templates designed for every career stage.",
  },
  {
    icon: Zap,
    title: "Job Matching",
    description: "Discover roles tailored to your profile.",
  },
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="relative hidden w-[480px] shrink-0 overflow-hidden bg-sidebar lg:flex lg:flex-col">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.52_0.19_280/0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(0.62_0.16_200/0.12),transparent_50%)]"
        />

        <div className="relative flex flex-1 flex-col justify-between p-10">
          <Logo />

          <div>
            <p className="text-sm font-medium text-primary">CareerCraft AI</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              Build your career with AI precision.
            </h1>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Join thousands of professionals using AI to create standout
              resumes, optimize for ATS, and land interviews faster.
            </p>

            <ul className="mt-8 space-y-4">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;

                return (
                  <li key={feature.title} className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-4" aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CareerCraft AI. All rights reserved.
          </p>
        </div>
      </aside>

      <main className="flex flex-1 items-center justify-center bg-background px-6 py-10">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
