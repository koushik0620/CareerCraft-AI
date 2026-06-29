import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { sessionRepository } from "@/server/repositories/session.repository";

export async function POST() {
  try {
    const cookieStore = await cookies();

    const refreshToken = cookieStore.get("refresh_token")?.value;

    if (refreshToken) {
      await sessionRepository.delete(refreshToken).catch(() => {});
    }

    cookieStore.delete("access_token");
    cookieStore.delete("refresh_token");

    return NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Logout failed",
      },
      {
        status: 500,
      },
    );
  }
}
