import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";

import HowItWorksCard from "./HowItWorksCard";
import { howItWorks } from "../../constants/landing";

export default function HowItWorks() {
  return (
    <section className="py-28">
      <Container>
        <FadeUp>
          <Heading
            title="How CareerCraft AI Works"
            subtitle="Create a professional resume in three simple steps."
            className="mx-auto mb-16 max-w-3xl text-center"
          />
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-3">
          {howItWorks.map((item, index) => (
            <FadeUp key={item.step} delay={index * 0.1}>
              <HowItWorksCard {...item} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
