"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "../services/auth.service";
import { LoginRequest } from "../types/auth";

export function useLogin() {
  return useMutation({
    mutationFn: (payload: LoginRequest) => authService.login(payload),

    onSuccess: () => {
      toast.success("Login successful");
    },

    onError: () => {
      toast.error("Invalid email or password");
    },
  });
}
