import { ConvexError } from "convex/values";
import { ActionCtx, MutationCtx, QueryCtx } from "./_generated/server";

const LIMIT_PER_SECOND = 10;

export async function rateLimitByKey(ctx: MutationCtx, key: string) {
  //TODO: rate limit
  return true;
}

export async function assertRateLimit(ctx: MutationCtx, key: string) {
  const success = await rateLimitByKey(ctx, key);

  if (!success) {
    throw new ConvexError("Rate limit exceeded");
  }
}

export function formatName(
  firstName?: string | null,
  lastName?: string | null,
) {
  firstName = firstName ?? "";
  lastName = lastName ?? "";
  let combinedName = `${firstName} ${lastName}`.trim();
  if (combinedName === "") {
    combinedName = "Anonymous";
  }
  return combinedName;
}

export async function getClerkId(ctx: QueryCtx | ActionCtx | MutationCtx) {
  const clerkId = (await ctx.auth.getUserIdentity())?.subject;
  return clerkId;
}
