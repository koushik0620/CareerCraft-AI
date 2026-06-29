import Link from "next/link";

import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="border-t py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">CareerCraft AI</h3>

            <p className="mt-4 text-muted-foreground">
              Build ATS-friendly resumes with AI.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Product</h4>

            <div className="space-y-3 text-muted-foreground">
              <Link href="/features">Features</Link>
              <br />
              <Link href="/pricing">Pricing</Link>
              <br />
              <Link href="/templates">Templates</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>

            <div className="space-y-3 text-muted-foreground">
              <Link href="/about">About</Link>
              <br />
              <Link href="/blog">Blog</Link>
              <br />
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>

            <div className="space-y-3 text-muted-foreground">
              <Link href="/privacy">Privacy</Link>
              <br />
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CareerCraft AI. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
