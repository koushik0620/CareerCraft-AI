import Container from "@/components/common/Container";
import FadeUp from "@/components/animations/FadeUp";

import { technologies } from "../constants/landing";

export default function TrustedCompanies() {
  return (
    <section className="border-y border-border/50 py-12">
      <Container>
        <FadeUp>
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Powered by modern technologies
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium shadow-sm transition-colors hover:border-primary/40"
              >
                {tech}
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
