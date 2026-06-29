import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "CareerCraft AI",
    template: "%s | CareerCraft AI",
  },
  description: "Create ATS-friendly resumes powered by AI.",
  metadataBase: new URL("https://careercraft.ai"),
  applicationName: "CareerCraft AI",
  keywords: [
    "AI Resume Builder",
    "Resume Generator",
    "ATS Resume",
    "CareerCraft AI",
  ],
  authors: [
    {
      name: "CareerCraft AI",
    },
  ],
};
