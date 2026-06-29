import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {
  name: string;
  price: string;
  description: string;
  highlighted: boolean;
  features: string[];
  button: string;
};

export default function PricingCard({
  name,
  price,
  description,
  highlighted,
  features,
  button,
}: Props) {
  return (
    <Card
      className={`
        relative
        rounded-3xl
        p-8
        transition-all
        duration-300
        ${
          highlighted
            ? "border-primary shadow-[0_0_60px_rgba(99,102,241,.2)]"
            : ""
        }
      `}
    >
      {highlighted && (
        <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold">{name}</h3>

      <p className="mt-2 text-muted-foreground">{description}</p>

      <div className="mt-8 text-5xl font-bold">
        {price}
        {price !== "Custom" && (
          <span className="text-lg text-muted-foreground">/mo</span>
        )}
      </div>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-500" />

            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Button className="mt-10 w-full" size="lg">
        {button}
      </Button>
    </Card>
  );
}
