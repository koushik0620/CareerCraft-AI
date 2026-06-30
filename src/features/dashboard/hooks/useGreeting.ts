"use client";

import { useMemo } from "react";

import { useAppSelector } from "@/store/hooks";

function getTimeGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export function useGreeting() {
  const { user } = useAppSelector((state) => state.auth);

  return useMemo(() => {
    const greeting = getTimeGreeting();
    const firstName = user?.firstName ?? "there";

    return {
      greeting,
      message: `${greeting}, ${firstName} 👋`,
      firstName,
    };
  }, [user?.firstName]);
}
