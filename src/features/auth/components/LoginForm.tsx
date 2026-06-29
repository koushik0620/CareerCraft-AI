"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AuthCard from "./AuthCard";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";
import PasswordField from "./PasswordField";
import GoogleLoginButton from "./GoogleLoginButton";

import { useLogin } from "../hooks/useLogin";
import { loginSchema, type LoginSchema } from "../schemas/login.schema";

export default function LoginForm() {
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchema) => {
    loginMutation.mutate(data);
  };

  return (
    <AuthCard>
      <AuthHeader title="Welcome Back" subtitle="Sign in to continue." />

      {/* Google Login */}
      <GoogleLoginButton />

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-xs uppercase text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>

      {/* Email Login */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input placeholder="Email Address" {...register("email")} />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <PasswordField
          register={register("password")}
          error={errors.password}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing In...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      <AuthFooter
        leftText="Forgot Password?"
        leftHref="/forgot-password"
        rightText="Create Account"
        rightHref="/register"
      />
    </AuthCard>
  );
}
