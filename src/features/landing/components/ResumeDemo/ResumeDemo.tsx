import Container from "@/components/common/Container";
import FadeUp from "@/components/animations/FadeUp";
import Heading from "@/components/common/Heading";
import AISuggestionCard from "./AISuggestionCard";
import ATSScoreCard from "./ATSScoreCard";
import ResumeEditor from "./ResumeEditor";

export default function ResumeDemo() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <FadeUp>
            <Heading
              title="See AI improve your resume instantly"
              subtitle="Watch CareerCraft AI analyze, improve and optimize your resume in real time."
            />

            <div className="mt-10 space-y-4">
              <Feature text="AI Resume Writing" />
              <Feature text="ATS Optimization" />
              <Feature text="Grammar Improvement" />
              <Feature text="Job Description Matching" />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative">
              <ResumeEditor />

              <ATSScoreCard />

              <AISuggestionCard />
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-2 rounded-full bg-primary" />
      <span>{text}</span>
    </div>
  );
}
