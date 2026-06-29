import { CheckCircle2, FileText, Sparkles, TrendingUp } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function HeroPreview() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Main Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[550px] w-[550px] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      {/* Resume */}
      <Card className="relative w-full max-w-xl rounded-[32px] border border-border/60 bg-background/70 p-10 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/20" />

          <div className="flex-1 space-y-2">
            <div className="h-4 w-40 rounded-full bg-muted" />
            <div className="h-3 w-28 rounded-full bg-muted" />
          </div>
        </div>

        {/* Sections */}
        <div className="mt-10 space-y-8">
          <div className="space-y-3">
            <div className="h-3 rounded-full bg-muted" />
            <div className="h-3 rounded-full bg-muted" />
            <div className="h-3 w-3/4 rounded-full bg-muted" />
          </div>

          <div className="space-y-3">
            <div className="h-3 rounded-full bg-muted" />
            <div className="h-3 rounded-full bg-muted" />
            <div className="h-3 rounded-full bg-muted" />
          </div>

          <Card className="rounded-2xl border p-5">
            <div className="flex items-center justify-between">
              <span className="font-medium">ATS Score</span>

              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>

            <h2 className="mt-4 text-5xl font-bold text-primary">95%</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Excellent Resume
            </p>
          </Card>
        </div>
      </Card>

      {/* Card 1 */}
      <Card className="absolute -left-12 top-16 hidden rounded-2xl border p-4 shadow-2xl lg:block">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-primary" />

          <div>
            <h4 className="text-sm font-semibold">AI Improved</h4>

            <p className="text-xs text-muted-foreground">Resume Summary</p>
          </div>
        </div>
      </Card>

      {/* Card 2 */}
      <Card className="absolute -right-10 top-12 hidden rounded-2xl border p-4 shadow-2xl lg:block">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-blue-500" />

          <div>
            <h4 className="text-sm font-semibold">Cover Letter</h4>

            <p className="text-xs text-muted-foreground">Generated</p>
          </div>
        </div>
      </Card>

      {/* Card 3 */}
      <Card className="absolute -right-8 bottom-14 hidden rounded-2xl border p-4 shadow-2xl lg:block">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-5 w-5 text-green-500" />

          <div>
            <h4 className="text-sm font-semibold">ATS +18%</h4>

            <p className="text-xs text-muted-foreground">Optimized</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
