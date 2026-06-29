import { Sparkles } from "lucide-react";

import { heroContent } from "../../constants/landing";

export default function HeroBadge() {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
      <Sparkles className="h-4 w-4" />
      {heroContent.badge}
    </div>
  );
}
