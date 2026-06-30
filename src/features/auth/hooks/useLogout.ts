"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "../services/auth.service";

import { logout } from "@/store/slices/auth.slice";
import { useAppDispatch } from "@/store/hooks";

export function useLogout() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: () => authService.logout(),

    onSuccess: () => {
      dispatch(logout());

      toast.success("Logged out successfully");

      router.replace("/");
    },

    onError: () => {
      toast.error("Logout failed");
    },
  });
}
