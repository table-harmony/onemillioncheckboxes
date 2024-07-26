import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 justify-between">
        <Link className="text-lg font-bold" href="/">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
}
