import { heroContent } from "../../constants/landing";

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {heroContent.stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            border
            border-border/60
            bg-background/50
            p-5
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-primary/40
            hover:shadow-lg
          "
        >
          <h3 className="text-3xl font-bold tracking-tight">{item.value}</h3>

          <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
