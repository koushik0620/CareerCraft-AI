"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";

type Props = {
  id?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export default function PasswordField({
  id = "password",
  placeholder = "Enter your password",
  register,
  error,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="relative">
        <Input
          id={id}
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder={placeholder}
          className="h-11 rounded-xl pr-10"
          {...register}
        />

        <button
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-destructive">{error.message}</p>
      )}
    </div>
  );
}
