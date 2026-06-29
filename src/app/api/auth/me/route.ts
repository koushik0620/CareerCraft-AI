import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { verifyAccessToken } from "@/server/auth/jwt";
import { authService } from "@/server/services/auth.service";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const payload = await verifyAccessToken(token);

    const user = await authService.me(payload.userId);

    return NextResponse.json({
      success: true,
      user,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }
}
