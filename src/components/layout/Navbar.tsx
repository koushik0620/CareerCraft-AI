"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation } from "@/config/navigation";

import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
import UserMenu from "@/components/layout/UserMenu";

import { Button } from "@/components/ui/button";

import { useAppSelector } from "@/store/hooks";

export default function Navbar() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <>
                <Button variant="ghost">
                  <Link href="/login">Login</Link>
                </Button>

                <Button>
                  <Link href="/register">Start Free</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
