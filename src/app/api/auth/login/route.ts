import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

import { authService } from "@/server/services/auth.service";
import { loginSchema } from "@/server/validations/auth.validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(parsed.error.flatten(), {
        status: 400,
      });
    }

    const headerList = await headers();

    const ipAddress = headerList.get("x-forwarded-for") ?? undefined;

    const userAgent = headerList.get("user-agent") ?? undefined;

    const result = await authService.login(
      parsed.data.email,
      parsed.data.password,
      ipAddress,
      userAgent,
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
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      {
        status: 401,
      },
    );
  }
}
