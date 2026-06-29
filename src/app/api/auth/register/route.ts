import { NextResponse } from "next/server";

import { authService } from "@/server/services/auth.service";
import { registerSchema } from "@/server/validations/auth.validation";

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
