import { Leaderboard } from "./leaderboard";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function LeaderboardPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  return (
    <div className="container">
      <PageHeader className="flex items-center justify-center text-center">
        <PageHeaderHeading>Leaderboard</PageHeaderHeading>
        <PageHeaderDescription>Our greatest checkboxers</PageHeaderDescription>
      </PageHeader>

      <Leaderboard page={page} />
    </div>
  );
}
