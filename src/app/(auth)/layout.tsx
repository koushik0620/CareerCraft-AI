import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-10">
      {children}
    </main>
  );
}
