import { TrendingUp } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function ATSScoreCard() {
  return (
    <Card className="absolute -left-10 top-10 hidden rounded-2xl p-4 shadow-xl lg:block">
      <div className="flex items-center gap-3">
        <TrendingUp className="h-5 w-5 text-green-500" />

        <div>
          <p className="text-sm font-semibold">ATS Score</p>

          <p className="text-2xl font-bold text-primary">95%</p>
        </div>
      </div>
    </Card>
  );
}
