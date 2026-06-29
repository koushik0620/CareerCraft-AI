"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "../services/auth.service";
import { RegisterRequest } from "../types/auth";

export function useRegister() {
  return useMutation({
    mutationFn: (payload: RegisterRequest) => authService.register(payload),

    onSuccess: () => {
      toast.success("Registration successful");
    },

    onError: () => {
      toast.error("Registration failed");
    },
  });
}
