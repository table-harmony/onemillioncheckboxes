import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/mode-toggle";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky mb-4 top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg flex items-center font-bold">
            One Million &nbsp;
            <Checkbox aria-label="header" /> &nbsp;s
          </span>
        </div>
        <div className="flex items-center">
          <ModeToggle />
          <Button size="icon" variant="ghost" aria-label="github" asChild>
            <Link
              rel="noreferrer"
              target="_blank"
              href={siteConfig.links.github}
            >
              <GithubIcon className="size-4" />
            </Link>
          </Button>
          <div className="ml-2 flex items-center">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
}
