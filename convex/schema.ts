import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
  })
    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"]),
  sets: defineTable({
    index: v.number(),
    bitVector: v.number(),
  }).index("by_index", ["index"]),
  rateLimits: defineTable({
    key: v.string(),
    value: v.number(),
    resetOn: v.number(),
  }).index("by_key", ["key"]),
});
