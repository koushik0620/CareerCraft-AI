import { api } from "@/lib/api/axios";

import type { ActivityItem, ApiResponse, DashboardOverview } from "../types/dashboard";

class DashboardApiService {
  async getOverview(): Promise<DashboardOverview> {
    const { data } = await api.get<ApiResponse<DashboardOverview>>(
      "/dashboard/overview",
    );

    return data.data;
  }

  async getActivities(limit = 10): Promise<ActivityItem[]> {
    const { data } = await api.get<ApiResponse<ActivityItem[]>>(
      "/dashboard/activities",
      { params: { limit } },
    );

    return data.data;
  }

  async applyToJob(jobId: string) {
    const { data } = await api.post(`/dashboard/jobs/${jobId}/apply`);
    return data;
  }
}

export const dashboardService = new DashboardApiService();
