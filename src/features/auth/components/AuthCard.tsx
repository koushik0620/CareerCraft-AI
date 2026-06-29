import { ReactNode } from "react";

import { Card } from "@/components/ui/card";

type AuthCardProps = {
  children: ReactNode;
  className?: string;
};

export default function AuthCard({ children, className = "" }: AuthCardProps) {
  return (
    <Card
      className={`
        w-full
        max-w-md
        rounded-3xl
        border
        bg-card/80
        p-8
        shadow-2xl
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </Card>
  );
}
