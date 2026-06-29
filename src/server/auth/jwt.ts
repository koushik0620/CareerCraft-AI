import { SignJWT, jwtVerify } from "jose";
import { randomUUID } from "crypto";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function generateAccessToken(userId: string) {
  return new SignJWT({ userId })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(secret);
}

export async function verifyAccessToken(token: string) {
  const { payload } = await jwtVerify(token, secret);

  return payload as {
    userId: string;
  };
}
export function generateRefreshToken() {
  return randomUUID();
}
