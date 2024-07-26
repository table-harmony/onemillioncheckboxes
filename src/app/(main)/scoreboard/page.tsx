import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

import { Scoreboard } from "./scoreboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <PageHeader>
        <PageHeaderHeading>Scoreboard</PageHeaderHeading>
        <PageHeaderDescription>Top 5 best checkboxers</PageHeaderDescription>
        <PageActions>
          <Button asChild>
            <Link href="/">Checkboxes</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <Scoreboard />
    </div>
  );
}
