import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

import { getCurrentUser } from "./users";
import { assertRateLimit } from "./util";

export const SET_LENGTH = 64;

export const updateCheckbox = mutation({
  args: {
    index: v.number(),
    isChecked: v.number(),
  },
  async handler(ctx, args) {
    const user = await getCurrentUser(ctx, {});

    if (!user) return;

    await assertRateLimit(ctx, user._id);

    const setIndex = Math.floor(args.index / SET_LENGTH);

    const set = await ctx.db
      .query("sets")
      .withIndex("by_index", (q) => q.eq("index", setIndex))
      .first();

    const bit = 1 << args.index % SET_LENGTH;

    if (!set) {
      await ctx.db.insert("sets", {
        index: setIndex,
        bitVector: bit,
      });
    } else {
      if (args.isChecked) {
        set.bitVector |= bit;
        await ctx.db.patch(user._id, {
          record: user.record + 1,
        });
      } else {
        set.bitVector &= ~bit;
      }

      await ctx.db.patch(set._id, {
        bitVector: set.bitVector,
      });
    }
  },
});

export const getSet = query({
  args: {
    index: v.number(),
  },
  async handler(ctx, args) {
    return await ctx.db
      .query("sets")
      .withIndex("by_index", (q) => q.eq("index", args.index))
      .first();
  },
});
