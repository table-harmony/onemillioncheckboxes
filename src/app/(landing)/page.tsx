import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { CheckboxGrid } from "./_components/checkbox-grid";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <PageHeader>
        <PageHeaderHeading>{siteConfig.name}</PageHeaderHeading>
        <PageHeaderDescription>I have counted...</PageHeaderDescription>
        <PageActions>
          <Button asChild>
            <Link href="/leaderboard">Leaderboard</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <CheckboxGrid />
    </div>
  );
}
