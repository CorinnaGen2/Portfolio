import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['Launched', 'MVP', 'In Progress', 'In Build']),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    tech: z.array(z.string()).optional(),
    github: z.string().optional(),
    website: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { portfolio };
