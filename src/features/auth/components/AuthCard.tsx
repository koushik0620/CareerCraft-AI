import { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AuthCardProps = {
  children: ReactNode;
  className?: string;
};

export default function AuthCard({ children, className }: AuthCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border-border/70 bg-card p-8 shadow-xl shadow-primary/5",
        className,
      )}
    >
      {children}
    </Card>
  );
}
