import { Star } from "lucide-react";

import { Card } from "@/components/ui/card";

type Props = {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  role,
  company,
  review,
  rating,
}: Props) {
  return (
    <Card className="rounded-3xl p-6 min-w-[360px]">
      <div className="mb-5 flex">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="leading-7 text-muted-foreground">"{review}"</p>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
          {name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold">{name}</h4>

          <p className="text-sm text-muted-foreground">
            {role} • {company}
          </p>
        </div>
      </div>
    </Card>
  );
}
