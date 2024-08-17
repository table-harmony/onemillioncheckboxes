import { Leaderboard } from "./leaderboard";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function LeaderboardPage() {
  return (
    <div className="container">
      <PageHeader className="flex items-center justify-center text-center">
        <PageHeaderHeading>Leaderboard</PageHeaderHeading>
        <PageHeaderDescription>Our greatest checkboxers</PageHeaderDescription>
      </PageHeader>
      <Leaderboard />
    </div>
  );
}
