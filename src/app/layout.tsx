import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import StoreProvider from "@/store/provider";
import QueryProvider from "@/components/providers/QueryProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "@/components/providers/AuthProvider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "CareerCraft AI",
    template: "%s | CareerCraft AI",
  },
  description:
    "Build ATS-friendly resumes with AI. Generate professional resumes, optimize for recruiters, and land your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}
      >
        <ThemeProvider>
          <StoreProvider>
            <QueryProvider>
              <GoogleOAuthProvider
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
              >
                <AuthProvider>{children}</AuthProvider>
              </GoogleOAuthProvider>
            </QueryProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
