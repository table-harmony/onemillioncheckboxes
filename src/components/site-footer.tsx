import { siteConfig } from "@/config/site";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
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
            href="https://eieio.io"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            eieio
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
