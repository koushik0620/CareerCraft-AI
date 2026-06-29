import { Card } from "@/components/ui/card";

export default function ResumeEditor() {
  return (
    <Card className="rounded-3xl p-8">
      <div className="space-y-5">
        <div className="h-8 w-44 rounded bg-primary/20" />

        <div className="space-y-3">
          <div className="h-3 rounded bg-muted" />
          <div className="h-3 rounded bg-muted" />
          <div className="h-3 w-2/3 rounded bg-muted" />
        </div>

        <div className="space-y-3 pt-8">
          <div className="h-3 rounded bg-muted" />
          <div className="h-3 rounded bg-muted" />
          <div className="h-3 rounded bg-muted" />
          <div className="h-3 w-4/5 rounded bg-muted" />
        </div>
      </div>
    </Card>
  );
}
