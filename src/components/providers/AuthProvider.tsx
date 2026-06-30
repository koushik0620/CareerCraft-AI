"use client";

import { useAuthInitializer } from "@/features/auth/hooks/useAuthInitializer";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthInitializer();

  return <>{children}</>;
}
