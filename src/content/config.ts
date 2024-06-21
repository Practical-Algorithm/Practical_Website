import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const quiz = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    quizImage: z.string(),
    answers: z.array(
      z.object({
        detail: z.string(),
        image: z.string().optional(),
      })
    ),
    correctAnswerIndex: z.number(),
  }),
});

export const collections = { blog, quiz };
