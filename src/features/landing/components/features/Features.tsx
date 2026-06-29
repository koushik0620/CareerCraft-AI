import Container from "@/components/common/Container";
import FadeUp from "@/components/animations/FadeUp";
import Heading from "@/components/common/Heading";

import FeatureCard from "./FeatureCard";

import { features } from "../../constants/landing";

export default function Features() {
  return (
    <section id="features" className="py-28">
      <Container>
        <FadeUp>
          <Heading
            title="Everything you need to build the perfect resume"
            subtitle="CareerCraft AI helps you create, optimize, and personalize resumes using modern AI technology."
            className="mx-auto mb-16 max-w-3xl text-center"
          />
        </FadeUp>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FadeUp key={feature.title} delay={index * 0.08}>
              <FeatureCard {...feature} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
