"use client";

import { MenuIcon, HomeIcon, TrophyIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { SignOutButton } from "@clerk/nextjs";
import useMediaQuery from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";

export function MenuButton() {
  const { isMobile } = useMediaQuery();
  const path = usePathname();

  if (!isMobile)
    return (
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          className={path === "/" ? "bg-muted" : ""}
          asChild
        >
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            <HomeIcon className="size-4" />
            Home
          </Link>
        </Button>
        <Button
          variant="ghost"
          className={path === "/leaderboard" ? "bg-muted" : ""}
          asChild
        >
          <Link
            href="/leaderboard"
            className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            <TrophyIcon className="size-4" />
            Leaderboard
          </Link>
        </Button>
      </div>
    );

  return (
    <Popover>
      <PopoverTrigger>
        <Button size="icon" variant="ghost" aria-label="menu">
          <MenuIcon className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="grid space-y-4 text-sm text-muted-foreground"
        align="end"
      >
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          <HomeIcon className="size-4" />
          Home
        </Link>
        <Link
          href="/leaderboard"
          className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          <TrophyIcon className="size-4" />
          Leaderboard
        </Link>
        <Separator />
        <div className="flex items-center justify-between">
          Theme <ModeToggle />
        </div>
        <SignOutButton>
          <span className="cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-200">
            Sign out
          </span>
        </SignOutButton>
      </PopoverContent>
    </Popover>
  );
}
