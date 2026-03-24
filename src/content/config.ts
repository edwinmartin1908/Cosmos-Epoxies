import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        category: z.string(),
        description: z.string(),
        image: z.string(),
        subcategory: z.string(),
        tags: z.array(z.string()).optional()
    }),
})


export const collections = { blog }