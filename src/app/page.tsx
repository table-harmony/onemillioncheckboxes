import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="container">
      <PageHeader>
        <PageHeaderHeading>{siteConfig.description}</PageHeaderHeading>
      </PageHeader>
    </div>
  );
}
