import FadeIn from "@/components/animations/FadeIn";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/common/Container";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";
import HeroStats from "./HeroStats";
import HeroTrust from "./HeroTrust";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute right-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>
      <div
        className="
    absolute
    inset-0
    -z-20
    bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]
  "
      />

      <Container>
        <div className="grid min-h-[90vh] items-center gap-24 lg:grid-cols-2">
          <div className="flex flex-col">
            <FadeUp>
              <HeroBadge />
            </FadeUp>

            <FadeUp delay={0.1}>
              <HeroContent />
            </FadeUp>

            <FadeUp delay={0.2}>
              <HeroButtons />
            </FadeUp>

            <FadeUp delay={0.2}>
              <HeroTrust />
            </FadeUp>

            <FadeUp delay={0.3}>
              <HeroStats />
            </FadeUp>
          </div>

          <FadeIn delay={0.4}>
            <HeroPreview />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
