"use client";

import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AuthCard from "./AuthCard";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";
import PasswordField from "./PasswordField";

import { useRegister } from "../hooks/useRegister";
import { RegisterSchema, registerSchema } from "../schemas/register.schema";

export default function RegisterForm() {
  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterSchema) => {
    registerMutation.mutate(data);
  };

  return (
    <AuthCard>
      <AuthHeader
        title="Create Account"
        subtitle="Start building your AI-powered resume."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input placeholder="First Name" {...register("firstName")} />

            {errors.firstName && (
              <p className="mt-2 text-sm text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <Input placeholder="Last Name" {...register("lastName")} />

            {errors.lastName && (
              <p className="mt-2 text-sm text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Input placeholder="Email Address" {...register("email")} />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <PasswordField
          placeholder="Password"
          register={register("password")}
          error={errors.password}
        />

        <PasswordField
          placeholder="Confirm Password"
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={registerMutation.isPending}
        >
          {registerMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>

      <AuthFooter
        leftText="Already have an account?"
        leftHref="/login"
        rightText="Sign In"
        rightHref="/login"
      />
    </AuthCard>
  );
}
