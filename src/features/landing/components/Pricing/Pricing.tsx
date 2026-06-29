import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";

import PricingCard from "./PricingCard";
import { pricingPlans } from "../../constants/landing";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <Container>
        <FadeUp>
          <Heading
            title="Simple Pricing"
            subtitle="Start free and upgrade when you're ready."
            className="mx-auto mb-16 max-w-3xl text-center"
          />
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <FadeUp key={plan.name} delay={index * 0.1}>
              <PricingCard {...plan} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
