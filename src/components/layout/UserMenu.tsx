"use client";

import { ChevronDown, FileText, LogOut, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";

import { useAppSelector } from "@/store/hooks";
import { useLogout } from "@/features/auth/hooks/useLogout";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserMenu() {
  const router = useRouter();

  const { user } = useAppSelector((state) => state.auth);

  const logoutMutation = useLogout();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-xl border border-border bg-background px-2 py-1.5 transition hover:bg-accent">
        <Avatar className="h-9 w-9">
          <AvatarImage src={user.avatar ?? ""} />

          <AvatarFallback>
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-72 rounded-xl"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1 py-1">
              <span className="font-semibold">
                {user.firstName} {user.lastName}
              </span>

              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => router.push("/profile")}>
            <User />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => router.push("/resumes")}>
            <FileText />
            My Resumes
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => router.push("/settings")}>
            <Settings />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          disabled={logoutMutation.isPending}
          onClick={() => logoutMutation.mutate()}
        >
          <LogOut />
          {logoutMutation.isPending ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
