// Astro content collection for projects.
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['active', 'shipped', 'paused', 'idea']).default('active'),
    tags: z.array(z.string()).default([]),
    demo: z.string().url().optional(),
    repo: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
