import { generateAccessToken, generateRefreshToken } from "../auth/jwt";
import { comparePassword, hashPassword } from "../auth/password";
import { sessionRepository } from "../repositories/session.repository";
import { userRepository } from "../repositories/user.repository";
import { verifyGoogleToken } from "../auth/google";
import { prisma } from "../db/prisma";
export class AuthService {
  async register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    const existing = await userRepository.findByEmail(data.email);

    if (existing) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await hashPassword(data.password);

    return userRepository.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
    });
  }

  async login(
    email: string,
    password: string,
    ipAddress?: string,
    userAgent?: string,
  ) {
    const user = await userRepository.findByEmailWithPassword(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isValid = await comparePassword(password, user.password!);

    if (!isValid) {
      throw new Error("Invalid email or password");
    }

    const accessToken = await generateAccessToken(user.id);

    const refreshToken = generateRefreshToken();

    await sessionRepository.create({
      userId: user.id,
      refreshToken,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      ipAddress,
      userAgent,
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
      },
    };
  }

  async me(userId: string) {
    const user = await userRepository.findProfileById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async refresh(refreshToken: string) {
    const session = await sessionRepository.findByRefreshToken(refreshToken);

    if (!session) {
      throw new Error("Unauthorized");
    }

    if (session.expiresAt < new Date()) {
      throw new Error("Session expired");
    }

    const accessToken = await generateAccessToken(session.userId);

    const newRefreshToken = generateRefreshToken();

    await sessionRepository.updateRefreshToken(
      refreshToken,
      newRefreshToken,
      new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    );

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  }

  async googleLogin(idToken: string, ipAddress?: string, userAgent?: string) {
    const payload = await verifyGoogleToken(idToken);

    const email = payload.email!;
    const googleId = payload.sub;

    // 1. Find existing user by email
    let user = await userRepository.findByEmail(email);

    // 2. If user exists, link Google account if not already linked
    if (user) {
      if (!user.googleId) {
        user = await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            googleId,
            provider: "GOOGLE",
            emailVerified: true,
            avatar: user.avatar ?? payload.picture,
          },
        });
      }
    } else {
      // 3. Create new Google account
      user = await userRepository.createGoogleUser({
        firstName: payload.given_name ?? "",
        lastName: payload.family_name ?? "",
        email,
        avatar: payload.picture ?? "",
        googleId,
      });
    }

    const accessToken = await generateAccessToken(user.id);

    const refreshToken = generateRefreshToken();

    await sessionRepository.create({
      userId: user.id,
      refreshToken,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      ipAddress,
      userAgent,
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        provider: user.provider,
        emailVerified: user.emailVerified,
        isActive: user.isActive,
        createdAt: user.createdAt,
      },
    };
  }
}

export const authService = new AuthService();
