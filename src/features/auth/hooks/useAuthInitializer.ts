"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { logout, setLoading, setUser } from "@/store/slices/auth.slice";
import { api } from "@/lib/api/axios";

export function useAuthInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initialize = async () => {
      dispatch(setLoading(true));

      try {
        const { data } = await api.get("/auth/me");

        dispatch(setUser(data.user));
      } catch {
        dispatch(logout());
      }
    };

    initialize();
  }, [dispatch]);
}
