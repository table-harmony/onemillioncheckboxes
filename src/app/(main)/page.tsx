import {
  PageActions,
  PageHeader,
  PageHeaderHeading,
} from "@/components/page-header";
import { CheckboxGrid } from "./_components/checkbox-grid";
import { Button } from "@/components/ui/button";

import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <PageHeader>
        <PageHeaderHeading>{siteConfig.name}</PageHeaderHeading>
        <PageActions>
          <Button asChild>
            <Link href="/scoreboard">Scoreboard</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <CheckboxGrid />
    </div>
  );
}
