"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "../services/auth.service";
import { LoginRequest } from "../types/auth";

import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/auth.slice";

export function useLogin() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (payload: LoginRequest) => authService.login(payload),

    onSuccess: (response) => {
      dispatch(setUser(response.user));

      toast.success("Login successful");

      router.replace("/dashboard");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ?? "Invalid email or password",
      );
    },
  });
}
