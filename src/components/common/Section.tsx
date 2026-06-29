import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className,
}: Props) {
  return (
    <section className={cn("py-24", className)}>
      {children}
    </section>
  );
}