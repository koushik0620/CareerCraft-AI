import { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <Card
      className="
        group
        rounded-3xl
        border
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-xl
      "
    >
      <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="leading-7 text-muted-foreground">{description}</p>
    </Card>
  );
}
