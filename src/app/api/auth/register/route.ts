import { NextResponse } from "next/server";

import { authService } from "@/server/services/auth.service";
import { registerSchema } from "@/server/validations/auth.validation";
import { logActivity } from "@/server/utils/activity-logger";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const user = await authService.register(parsed.data);

    await logActivity({
      userId: user.id,
      type: "PROFILE_UPDATED",
      title: "Welcome to CareerCraft AI",
      description: "Your account was created successfully. Start building your first resume.",
    });

    return NextResponse.json(
      {
        success: true,
        data: user,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
