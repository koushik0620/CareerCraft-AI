import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

import { heroContent } from "../../constants/landing";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Button
        size="lg"
        className="h-14 rounded-xl px-8 text-base font-semibold shadow-lg transition-all hover:scale-105"
      >
        {heroContent.primaryButton}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="h-14 rounded-xl px-8 text-base font-semibold"
      >
        <Play className="mr-2 h-4 w-4" />
        {heroContent.secondaryButton}
      </Button>
    </div>
  );
}
