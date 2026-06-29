"use client";

import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";

import AuthCard from "./AuthCard";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";
import PasswordField from "./PasswordField";

import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "../schemas/reset-password.schema";
import { authService } from "../services/auth.service";

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  async function onSubmit(data: ResetPasswordSchema) {
    await authService.resetPassword({
      token: "",
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  }

  return (
    <AuthCard>
      <AuthHeader
        title="Reset Password"
        subtitle="Create a new password for your account."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <PasswordField
          placeholder="New Password"
          register={register("password")}
          error={errors.password}
        />

        <PasswordField
          placeholder="Confirm Password"
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <Button type="submit" className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </>
          ) : (
            "Reset Password"
          )}
        </Button>
      </form>

      <AuthFooter
        leftText="Back to Login"
        leftHref="/login"
        rightText="Create Account"
        rightHref="/register"
      />
    </AuthCard>
  );
}
