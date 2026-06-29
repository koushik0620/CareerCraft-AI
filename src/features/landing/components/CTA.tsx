import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-32">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-[40px] border bg-gradient-to-br from-primary/10 via-background to-cyan-500/10 p-10 lg:p-20">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">

              <h2 className="text-4xl font-bold lg:text-6xl">
                Ready to Build Your Dream Resume?
              </h2>

              <p className="mt-6 text-lg text-muted-foreground">
                Join thousands of professionals creating ATS-friendly resumes
                with AI.
              </p>

              <div className="mt-10 flex justify-center gap-4">

                <Button
                  size="lg"
                  className="h-14 rounded-xl px-8"
                >
                  <Link href="/login">
                    Start Building Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-xl px-8"
                >
                  View Templates
                </Button>

              </div>

            </div>

          </div>
        </FadeUp>
      </Container>
    </section>
  );
}