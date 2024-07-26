import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.daily(
  "randomize positions",
  { hourUTC: 16, minuteUTC: 0 },
  internal.sets.randomize
);

export default crons;
