import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ url }): Promise<Response> => {
	const query: string | null = url.searchParams.get("query");

	if (query === null) {
		return new Response(JSON.stringify({ error: "Query param is null" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	const allArticles: CollectionEntry<"blog">[] = await getCollection("blog");

	const searchResults = allArticles.filter((article) => {
		const titleMatch: boolean = article.data.title
			.toLowerCase()
			.includes(query.toLocaleLowerCase());

		const bodyMatch: boolean = article.body
			.toLowerCase()
			.includes(query.toLocaleLowerCase());

		const slugMatch: boolean = article.slug
			.toLowerCase()
			.includes(query.toLocaleLowerCase());

		const authorMatch: boolean = article.data.author
			.toLowerCase()
			.includes(query.toLocaleLowerCase());

		return titleMatch || bodyMatch || slugMatch || authorMatch;
	});

	return new Response(JSON.stringify({ searchResults }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
};
