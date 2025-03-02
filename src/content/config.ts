// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

// Define projects collection based on actual content
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    launchYear: z.number(),
    discontinued: z.boolean(),
    description: z.string(),
    url: z.string().nullable().optional(),
    demoUrl: z.string().nullable().optional(),
    sourceUrl: z.string().nullable().optional(),
    articleUrl: z.string().nullable().optional(),
    archiveUrl: z.string().nullable().optional(),
  }),
});

// Define publications collection for BibTeX entries
const publicationsCollection = defineCollection({
  type: 'content',
  // Since you're using BibTeX files, we'll need to handle them differently
  // You might want to process the .bib file separately using a BibTeX parser
  schema: z.object({
    // This is a minimal schema - you might need to adjust based on how you're
    // processing the BibTeX data
    title: z.string().optional(),
    authors: z.array(z.string()).optional(),
    year: z.number().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
  }),
});

// Export collections object with all collections
export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  publications: publicationsCollection,
};
