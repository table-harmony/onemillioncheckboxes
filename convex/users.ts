import { internalMutation, internalQuery, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

import { getClerkId } from "./util";

export const getCurrentUser = internalQuery({
  async handler(ctx) {
    const clerkId = await getClerkId(ctx);

    if (!clerkId) return null;

    const user = await getUserByClerkId(ctx, { clerkId });

    return user;
  },
});

export const getUser = internalQuery({
  args: { userId: v.id("users") },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .withIndex("by_id", (q) => q.eq("_id", args.userId))
      .first();

    if (!user) throw new ConvexError("Could not find user");

    return user;
  },
});

export const getUserByEmail = internalQuery({
  args: { email: v.string() },
  async handler(ctx, args) {
    return await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
  },
});

export const getUserByClerkId = internalQuery({
  args: { clerkId: v.string() },
  async handler(ctx, args) {
    return await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .first();
  },
});

export const createUser = internalMutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
    image: v.string(),
  },
  async handler(ctx, args) {
    const user = await getUserByClerkId(ctx, { clerkId: args.clerkId });

    if (user) throw new ConvexError("User already exists");

    await ctx.db.insert("users", {
      clerkId: args.clerkId,
      name: args.name,
      email: args.email,
      image: args.image,
      record: 0,
    });
  },
});

export const deleteUser = internalMutation({
  args: { clerkId: v.string() },
  async handler(ctx, args) {
    const user = await getUserByClerkId(ctx, { clerkId: args.clerkId });

    if (!user) {
      throw new ConvexError("Could not find user");
    }

    await ctx.db.delete(user._id);
  },
});

export const updateUser = internalMutation({
  args: {
    clerkId: v.string(),
    image: v.optional(v.string()),
    record: v.optional(v.number()),
  },
  async handler(ctx, args) {
    const user = await getUserByClerkId(ctx, { clerkId: args.clerkId });

    if (!user) {
      throw new ConvexError("Could not find user");
    }

    await ctx.db.patch(user._id, {
      image: args.image,
      record: args.record,
    });
  },
});

export const getScoreboard = query({
  async handler(ctx) {
    const topUsers = await ctx.db
      .query("users")
      .withIndex("by_record")
      .order("desc")
      .take(5);

    return topUsers;
  },
});
