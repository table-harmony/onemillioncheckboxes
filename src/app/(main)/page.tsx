import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <PageHeader>
        <PageHeaderHeading>{siteConfig.name}</PageHeaderHeading>
        <PageHeaderDescription>
          Inspired by{" "}
          <Link
            href="https://eieio.games"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            eieio
          </Link>
          .
        </PageHeaderDescription>
      </PageHeader>
    </div>
  );
}
