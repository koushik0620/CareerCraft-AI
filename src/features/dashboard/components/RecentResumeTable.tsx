"use client";

import { formatDistanceToNow } from "date-fns";
import {
  Download,
  ExternalLink,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { memo } from "react";

import type { ResumeItem } from "../types/dashboard";

import DashboardHeader from "./DashboardHeader";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RecentResumeTableProps {
  resumes: ResumeItem[];
}

function getScoreBadgeVariant(score: number) {
  if (score >= 85) return "default";
  if (score >= 70) return "secondary";
  return "outline";
}

function RecentResumeTableComponent({ resumes }: RecentResumeTableProps) {
  if (resumes.length === 0) {
    return (
      <Card className="border-border/60">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-sm font-medium">No resumes yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Create your first resume to get started.
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/dashboard/ai-resume-builder" />}
            className="mt-4 rounded-xl"
          >
            Create Resume
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/60">
      <CardContent className="pt-4">
        <DashboardHeader
          title="Recent Resumes"
          description="Your latest resume drafts and their ATS performance"
          action={
            <Button
              nativeButton={false}

              render={<Link href="/dashboard/templates" />}
              variant="outline"
              size="sm"
              className="rounded-xl"
            >
              View All
            </Button>
          }
        />

        <div className="mt-4 rounded-xl border border-border">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Resume Name</TableHead>
                <TableHead className="hidden md:table-cell">Template</TableHead>
                <TableHead>ATS Score</TableHead>
                <TableHead className="hidden sm:table-cell">Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {resumes.map((resume) => (
                <TableRow key={resume.id}>
                  <TableCell className="font-medium">{resume.name}</TableCell>

                  <TableCell className="hidden text-muted-foreground md:table-cell">
                    {resume.template}
                  </TableCell>

                  <TableCell>
                    <Badge variant={getScoreBadgeVariant(resume.atsScore)}>
                      {resume.atsScore}%
                    </Badge>
                  </TableCell>

                  <TableCell className="hidden text-muted-foreground sm:table-cell">
                    {formatDistanceToNow(new Date(resume.updatedAt), {
                      addSuffix: true,
                    })}
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            className="rounded-lg"
                            aria-label={`Actions for ${resume.name}`}
                          />
                        }
                      >
                        <MoreHorizontal />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className="rounded-xl">
                        <DropdownMenuItem>
                          <Pencil />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ExternalLink />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                          <Trash2 />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default memo(RecentResumeTableComponent);
