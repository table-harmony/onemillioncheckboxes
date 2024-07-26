import { ActionCtx, MutationCtx, QueryCtx } from "./_generated/server";

const LIMIT_PER_SECOND = 5;

export async function rateLimitByKey(ctx: MutationCtx, key: string) {
  const rateLimit = await ctx.db
    .query("rateLimits")
    .withIndex("by_key", (q) => q.eq("key", key))
    .first();

  if (!rateLimit) {
    await ctx.db.insert("rateLimits", {
      key,
      value: 1,
      resetOn: Date.now() + 1000,
    });
  } else {
    if (rateLimit.value >= LIMIT_PER_SECOND) {
      if (rateLimit.resetOn < Date.now()) {
        rateLimit.value = 0;
        rateLimit.resetOn = Date.now() + 1000;
      } else {
        return true;
      }
    }
    rateLimit.value++;
    await ctx.db.patch(rateLimit._id, {
      value: rateLimit.value,
      resetOn: rateLimit.resetOn,
    });
  }
  return false;
}

export async function assertRateLimit(ctx: MutationCtx, key: string) {
  const success = await rateLimitByKey(ctx, key);

  if (!success) {
    throw new Error("Rate limit exceeded");
  }
}

export function formatName(
  firstName?: string | null,
  lastName?: string | null
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
  return (await ctx.auth.getUserIdentity())?.subject;
}
