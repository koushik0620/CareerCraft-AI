import { Star } from "lucide-react";

export default function HeroTrust() {
  return (
    <div className="mt-8 flex items-center gap-3">
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Trusted by developers, students and professionals.
      </p>
    </div>
  );
}
