import { NextResponse } from "next/server";

import { AppError } from "@/server/errors";
import { requireAuth } from "@/server/auth/require-auth";
import { dashboardService } from "@/server/services/dashboard.service";
import { failure, success } from "@/server/utils/api-response";

export async function GET() {
  try {
    const userId = await requireAuth();
    const data = await dashboardService.getOverview(userId);

    return NextResponse.json(success(data));
  } catch (error) {
    console.error("Dashboard Overview Error:", error);

    if (error instanceof AppError) {
      return NextResponse.json(failure(error.message), {
        status: error.statusCode,
      });
    }

    return NextResponse.json(
      failure(error instanceof Error ? error.message : "Internal server error"),
      {
        status: 500,
      },
    );
  }
}
