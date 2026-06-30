import { NextResponse } from "next/server";

import { AppError } from "@/server/errors";
import { requireAuth } from "@/server/auth/require-auth";
import { dashboardService } from "@/server/services/dashboard.service";
import { failure, success } from "@/server/utils/api-response";

export async function GET() {
  try {
    const userId = await requireAuth();
    const data = await dashboardService.getStats(userId);

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
