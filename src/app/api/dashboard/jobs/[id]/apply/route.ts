import { NextResponse } from "next/server";

import { AppError, NotFoundError } from "@/server/errors";
import { requireAuth } from "@/server/auth/require-auth";
import { prisma } from "@/server/db/prisma";
import { logActivity } from "@/server/utils/activity-logger";
import { failure, success } from "@/server/utils/api-response";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(_request: Request, { params }: RouteParams) {
  try {
    const userId = await requireAuth();
    const { id } = await params;

    const job = await prisma.jobListing.findFirst({
      where: { id, isActive: true },
    });

    if (!job) {
      throw new NotFoundError("Job listing not found");
    }

    const existing = await prisma.jobApplication.findFirst({
      where: { userId, jobListingId: id },
    });

    if (existing) {
      return NextResponse.json(failure("You have already applied to this job"), {
        status: 409,
      });
    }

    const application = await prisma.jobApplication.create({
      data: {
        userId,
        jobListingId: id,
        jobTitle: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
        isRemote: job.isRemote,
        status: "APPLIED",
      },
    });

    await logActivity({
      userId,
      type: "JOB_APPLIED",
      title: "Applied to Job",
      description: `${job.title} at ${job.company}`,
      metadata: { jobListingId: id, applicationId: application.id },
    });

    return NextResponse.json(
      success(application, "Application submitted successfully"),
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json(failure(error.message), {
        status: error.statusCode,
      });
    }

    return NextResponse.json(failure("Internal server error"), {
      status: 500,
    });
  }
}
