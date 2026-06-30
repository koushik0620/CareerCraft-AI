import type { ActivityType as PrismaActivityType, Prisma } from "@/generated/prisma";

import { prisma } from "../db/prisma";

export async function logActivity(input: {
  userId: string;
  type: PrismaActivityType;
  title: string;
  description?: string;
  metadata?: Prisma.InputJsonValue;
}) {
  return prisma.activity.create({
    data: {
      userId: input.userId,
      type: input.type,
      title: input.title,
      description: input.description,
      metadata: input.metadata,
    },
  });
}
