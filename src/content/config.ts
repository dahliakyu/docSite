import { defineCollection } from "astro:content";
import { blogSchema } from "./_schemas";

const logs = defineCollection({
  schema: blogSchema,
});

export const collections = { logs };
