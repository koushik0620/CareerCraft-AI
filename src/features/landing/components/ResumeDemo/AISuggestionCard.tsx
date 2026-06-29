import { Sparkles } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function AISuggestionCard() {
  return (
    <Card className="absolute -right-8 bottom-10 hidden rounded-2xl p-4 shadow-xl lg:block">
      <div className="flex items-center gap-3">
        <Sparkles className="h-5 w-5 text-primary" />

        <div>
          <p className="text-sm font-semibold">AI Improved</p>

          <p className="text-xs text-muted-foreground">Professional Summary</p>
        </div>
      </div>
    </Card>
  );
}
