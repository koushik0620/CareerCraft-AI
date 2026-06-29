import { OAuth2Client } from "google-auth-library";

export const googleClient = new OAuth2Client(process.env.AUTH_GOOGLE_ID);

export async function verifyGoogleToken(idToken: string) {
  const ticket = await googleClient.verifyIdToken({
    idToken,
    audience: process.env.AUTH_GOOGLE_ID,
  });

  const payload = ticket.getPayload();

  if (!payload) {
    throw new Error("Invalid Google token");
  }

  return payload;
}
