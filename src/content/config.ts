import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			publishedDate: z.date(),
			author: z.string(),
			image: image(),
			tags: z.array(z.string()),
			photographer: z.string(),
			imageUrl: z.string(),
		}),
});

const introservicesCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		description: z.string(),
		icon: z.string(),
		url: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
	introservices: introservicesCollection,
};
