import { prisma } from "../db/prisma";

export class SessionRepository {
  create(data: {
    userId: string;
    refreshToken: string;
    expiresAt: Date;
    ipAddress?: string;
    userAgent?: string;
  }) {
    return prisma.session.create({
      data,
    });
  }

  findByRefreshToken(refreshToken: string) {
    return prisma.session.findUnique({
      where: {
        refreshToken,
      },
    });
  }

  updateRefreshToken(
    oldRefreshToken: string,
    newRefreshToken: string,
    expiresAt: Date,
  ) {
    return prisma.session.update({
      where: {
        refreshToken: oldRefreshToken,
      },
      data: {
        refreshToken: newRefreshToken,
        expiresAt,
      },
    });
  }

  delete(refreshToken: string) {
    return prisma.session.delete({
      where: {
        refreshToken,
      },
    });
  }
}

export const sessionRepository = new SessionRepository();
