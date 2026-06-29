import { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

type Props = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function HowItWorksCard({
  step,
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <Card className="group relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-2xl bg-primary/10 p-4 text-primary">
          <Icon className="h-7 w-7" />
        </div>

        <span className="text-5xl font-bold text-primary/15">{step}</span>
      </div>

      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
    </Card>
  );
}
