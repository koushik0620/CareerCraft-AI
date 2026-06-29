import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

import { authService } from "@/server/services/auth.service";

export async function POST(req: Request) {
  try {
    const { idToken } = await req.json();

    const headerList = await headers();

    const result = await authService.googleLogin(
      idToken,
      headerList.get("x-forwarded-for") ?? undefined,
      headerList.get("user-agent") ?? undefined,
    );

    const cookieStore = await cookies();

    cookieStore.set("access_token", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    cookieStore.set("refresh_token", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return NextResponse.json({
      success: true,
      user: result.user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Google login failed",
      },
      { status: 401 },
    );
  }
}
