import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  popular?: boolean;
};

export default function TemplateCard({ title, description, popular }: Props) {
  return (
    <Card
      className="
        group
        overflow-hidden
        rounded-3xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Preview */}
      <div className="relative h-80 bg-muted">
        <div className="absolute inset-6 rounded-xl border bg-background p-4">
          <div className="mb-4 h-6 w-32 rounded bg-primary/20" />

          <div className="space-y-2">
            <div className="h-2 rounded bg-muted" />
            <div className="h-2 rounded bg-muted" />
            <div className="h-2 w-2/3 rounded bg-muted" />
          </div>

          <div className="mt-8 space-y-2">
            <div className="h-2 rounded bg-muted" />
            <div className="h-2 rounded bg-muted" />
            <div className="h-2 rounded bg-muted" />
          </div>
        </div>

        {popular && (
          <Badge className="absolute right-4 top-4">Most Popular</Badge>
        )}
      </div>

      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}
