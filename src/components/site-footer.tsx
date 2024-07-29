import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex items-center justify-between gap-4 md:h-24 flex-row">
        <p className="text-balance text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <Link
            href="https://tableharmony.io"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            TableHarmony
          </Link>
          . Inspired from{" "}
          <Link
            href="https://eieio.games/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            eieio
          </Link>
          .
        </p>
        <Button size="icon" variant="ghost" aria-label="github" asChild>
          <Link rel="noreferrer" target="_blank" href={siteConfig.links.github}>
            <GithubIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
