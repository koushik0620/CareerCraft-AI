"use client";

import Link from "next/link";
import { MailCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";

export default function VerifyEmail() {
  return (
    <AuthCard className="text-center">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-primary/10 p-5">
          <MailCheck className="h-10 w-10 text-primary" />
        </div>
      </div>

      <AuthHeader
        title="Verify Your Email"
        subtitle="We've sent a verification link to your email address."
      />

      <Button className="mt-6 w-full">Resend Verification Email</Button>

      <Link
        href="/login"
        className="mt-6 block text-sm text-primary hover:underline"
      >
        Back to Login
      </Link>
    </AuthCard>
  );
}
