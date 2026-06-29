"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import FadeUp from "@/components/animations/FadeUp";
import { faqs } from "../constants/landing";

export default function FAQ() {
  return (
    <section className="py-28">
      <Container className="max-w-4xl">
        <FadeUp>
          <Heading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about CareerCraft AI."
            className="mb-16 text-center"
          />
        </FadeUp>

        <Accordion className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeUp key={faq.question} delay={index * 0.05}>
              <AccordionItem
                value={`item-${index}`}
                className="rounded-2xl border px-6"
              >
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </FadeUp>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
