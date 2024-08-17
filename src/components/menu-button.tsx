import { MenuIcon, UserRoundIcon, HomeIcon, TrophyIcon } from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { currentUser } from "@clerk/nextjs/server";

export async function MenuButton() {
  const user = await currentUser();

  return (
    <Popover>
      <PopoverTrigger>
        <div className="hidden md:block">
          <Avatar className="size-8">
            <AvatarImage src={user?.imageUrl} alt="profile" />
            <AvatarFallback aria-label="profile">
              <UserRoundIcon className="size-4" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="md:hidden">
          <Button size="icon" variant="ghost" aria-label="menu">
            <MenuIcon className="size-4" />
          </Button>
        </div>
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
