import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import FadeUp from "@/components/animations/FadeUp";

import TemplateCard from "./TemplateCard";
import { templates } from "../../constants/landing";

export default function ResumeTemplates() {
  return (
    <section id="templates" className="py-28">
      <Container>
        <FadeUp>
          <Heading
            title="Professional Resume Templates"
            subtitle="Choose from beautifully designed templates optimized for recruiters and ATS systems."
            className="mx-auto mb-16 max-w-3xl text-center"
          />
        </FadeUp>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template, index) => (
            <FadeUp key={template.id} delay={index * 0.1}>
              <TemplateCard {...template} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
