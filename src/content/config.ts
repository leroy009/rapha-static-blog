import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		publishedDate: z.string(),
		author: z.string(),
		imgae: z.string(),
		tags: z.array(z.string()),
		photographer: z.string(),
		imageurl: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
};
