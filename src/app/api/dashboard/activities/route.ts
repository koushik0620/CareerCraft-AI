import { NextRequest, NextResponse } from "next/server";

import { AppError } from "@/server/errors";
import { requireAuth } from "@/server/auth/require-auth";
import { dashboardService } from "@/server/services/dashboard.service";
import { failure, success } from "@/server/utils/api-response";

export async function GET(request: NextRequest) {
  try {
    const userId = await requireAuth();
    const limit = Number(request.nextUrl.searchParams.get("limit") ?? 10);
    const data = await dashboardService.getActivities(
      userId,
      Math.min(Math.max(limit, 1), 50),
    );

    return NextResponse.json(success(data));
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json(failure(error.message), {
        status: error.statusCode,
      });
    }

    return NextResponse.json(failure("Internal server error"), {
      status: 500,
    });
  }
}
