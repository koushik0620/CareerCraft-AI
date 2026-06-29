import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function Heading({ title, subtitle, className }: Props) {
  return (
    <div className={cn("space-y-4", className)}>
      <h2 className="text-4xl font-bold tracking-tight">{title}</h2>

      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
