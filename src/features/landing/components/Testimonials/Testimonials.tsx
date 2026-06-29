import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../constants/landing";

export default function Testimonials() {
  return (
    <section className="py-28">
      <Container>
        <FadeUp>
          <Heading
            title="Loved by Professionals"
            subtitle="Thousands of users trust CareerCraft AI to create resumes that stand out."
            className="mx-auto mb-16 max-w-3xl text-center"
          />
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <FadeUp key={item.name} delay={index * 0.1}>
              <TestimonialCard {...item} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
