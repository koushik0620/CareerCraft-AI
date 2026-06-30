"use client";

import { useQuery } from "@tanstack/react-query";

import { DASHBOARD_QUERY_STALE_TIME } from "../constants/dashboard";
import { dashboardService } from "../services/dashboard.service";

import { QUERY_KEYS } from "@/lib/react-query/query-keys";

export function useDashboardData() {
  return useQuery({
    queryKey: QUERY_KEYS.DASHBOARD.OVERVIEW,
    queryFn: () => dashboardService.getOverview(),
    staleTime: DASHBOARD_QUERY_STALE_TIME,
  });
}
