import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { CheckboxGrid } from "./_components/checkbox-grid";
import { Scoreboard } from "./_components/scoreboard";

import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="container">
      <PageHeader>
        <PageHeaderHeading>{siteConfig.name}</PageHeaderHeading>
      </PageHeader>
      <CheckboxGrid />
      <Scoreboard />
    </div>
  );
}
