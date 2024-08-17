import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { CheckboxGrid } from "./_components/checkbox-grid";

import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="container">
      <PageHeader className="flex items-center justify-center text-center">
        <PageHeaderHeading>{siteConfig.name}</PageHeaderHeading>
        <PageHeaderDescription>Dont worry, I counted</PageHeaderDescription>
      </PageHeader>
      <CheckboxGrid />
    </div>
  );
}
