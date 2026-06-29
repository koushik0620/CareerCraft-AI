import { prisma } from "../db/prisma";

export class UserRepository {
  findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  create(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return prisma.user.create({
      data,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        avatar: true,
        role: true,
        provider: true,
        emailVerified: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  findProfileById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        avatar: true,
        role: true,
        provider: true,
        emailVerified: true,
        isActive: true,
        createdAt: true,
      },
    });
  }

  findByGoogleId(googleId: string) {
    return prisma.user.findUnique({
      where: {
        googleId,
      },
    });
  }

  createGoogleUser(data: {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    googleId: string;
  }) {
    return prisma.user.create({
      data: {
        ...data,
        provider: "GOOGLE",
        emailVerified: true,
      },
    });
  }

  findByEmailOrGoogleId(email: string, googleId: string) {
    console.log("email:", email);
    console.log("googleId:", googleId);

    return prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
  findByEmailWithPassword(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export const userRepository = new UserRepository();
