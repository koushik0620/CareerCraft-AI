import CTA from "@/features/landing/components/CTA";
import FAQ from "@/features/landing/components/FAQ";
import Features from "@/features/landing/components/features/Features";
import Hero from "@/features/landing/components/hero/Hero";
import HowItWorks from "@/features/landing/components/HowItWorks";
import Pricing from "@/features/landing/components/Pricing/Pricing";
import ResumeDemo from "@/features/landing/components/ResumeDemo/ResumeDemo";
import ResumeTemplates from "@/features/landing/components/ResumeTemplates/ResumeTemplates";
import Testimonials from "@/features/landing/components/Testimonials/Testimonials";
import TrustedCompanies from "@/features/landing/components/TrustedCompanies";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedCompanies />
      <Features />
      <ResumeDemo />
      <ResumeTemplates />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
