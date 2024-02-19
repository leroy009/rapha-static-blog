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

const whyusCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		description: z.string(),
		icon: z.string(),
	}),
});

const servicelistCollection = defineCollection({
	type: "data",
	schema: z.object({
		icon: z.string(),
		category: z.string(),
		list: z.array(z.string()),
	}),
});

const contactCollection = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		htmlText: z.string(),
		icon: z.string(),
		link_text: z.string().optional(),
		link_url: z.string().optional(),
	}),
});

const valuesCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		description: z.string(),
	}),
});

const teamCollection = defineCollection({
	type: "data",
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			role: z.string(),
			image: image(),
			organization: z.string(),
		}),
});

export const collections = {
	blog: blogCollection,
	introservices: introservicesCollection,
	whyus: whyusCollection,
	servicelist: servicelistCollection,
	contact: contactCollection,
	values: valuesCollection,
	team: teamCollection,
};
