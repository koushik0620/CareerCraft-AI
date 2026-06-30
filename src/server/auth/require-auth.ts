import { cookies } from "next/headers";

import { UnauthorizedError } from "../errors";
import { verifyAccessToken } from "./jwt";

export async function requireAuth(): Promise<string> {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    throw new UnauthorizedError();
  }

  try {
    const payload = await verifyAccessToken(token);
    return payload.userId;
  } catch {
    throw new UnauthorizedError();
  }
}
