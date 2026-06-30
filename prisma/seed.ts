import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

const TEMPLATES = [
  {
    name: "Modern Professional",
    slug: "modern-professional",
    description: "Clean layout optimized for tech and corporate roles.",
    category: "professional",
    sortOrder: 1,
  },
  {
    name: "Minimal Clean",
    slug: "minimal-clean",
    description: "Simple, elegant design with maximum readability.",
    category: "minimal",
    sortOrder: 2,
  },
  {
    name: "Executive",
    slug: "executive",
    description: "Premium layout for senior leadership positions.",
    category: "executive",
    isPremium: true,
    sortOrder: 3,
  },
  {
    name: "Creative",
    slug: "creative",
    description: "Stand out with a distinctive creative format.",
    category: "creative",
    sortOrder: 4,
  },
  {
    name: "ATS Optimized",
    slug: "ats-optimized",
    description: "Built specifically for applicant tracking systems.",
    category: "professional",
    sortOrder: 5,
  },
  {
    name: "Fresh Graduate",
    slug: "fresh-graduate",
    description: "Perfect for students and early-career professionals.",
    category: "entry-level",
    sortOrder: 6,
  },
];

const JOB_LISTINGS = [
  {
    title: "Senior Frontend Engineer",
    company: "Vercel",
    location: "San Francisco, CA",
    salary: "$160k – $210k",
    isRemote: true,
    description: "Build the future of the web with Next.js and React.",
  },
  {
    title: "Staff Software Engineer",
    company: "Linear",
    location: "Remote",
    salary: "$180k – $240k",
    isRemote: true,
    description: "Help craft exceptional developer tools and experiences.",
  },
  {
    title: "Full Stack Developer",
    company: "Stripe",
    location: "New York, NY",
    salary: "$150k – $195k",
    isRemote: false,
    description: "Build economic infrastructure for the internet.",
  },
  {
    title: "Product Designer",
    company: "Notion",
    location: "San Francisco, CA",
    salary: "$140k – $190k",
    isRemote: true,
    description: "Design intuitive experiences for millions of users.",
  },
  {
    title: "AI Engineer",
    company: "OpenAI",
    location: "San Francisco, CA",
    salary: "$200k – $350k",
    isRemote: false,
    description: "Push the boundaries of AI-powered applications.",
  },
  {
    title: "DevRel Engineer",
    company: "Cursor",
    location: "Remote",
    salary: "$130k – $180k",
    isRemote: true,
    description: "Empower developers with AI-native tooling.",
  },
];

async function main() {
  console.log("Seeding resume templates...");

  for (const template of TEMPLATES) {
    await prisma.resumeTemplate.upsert({
      where: { slug: template.slug },
      update: template,
      create: template,
    });
  }

  console.log("Seeding job listings...");

  for (const job of JOB_LISTINGS) {
    const existing = await prisma.jobListing.findFirst({
      where: { title: job.title, company: job.company },
    });

    if (existing) {
      await prisma.jobListing.update({
        where: { id: existing.id },
        data: job,
      });
    } else {
      await prisma.jobListing.create({ data: job });
    }
  }

  console.log("Seed completed.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
