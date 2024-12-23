export const load = async () => {
	const posts_paths = Object.keys(import.meta.glob('/src/routes/post/*/+page.svelte'));

	const unsorted_posts = await Promise.all(
		posts_paths.map(async (path) => {
			const link = path.split('/').at(-2) ?? '';
			const component = await import(`../../routes/post/${link}/+page.svelte`);
			const { title, date, image } = component;
			return { link, title, date, image };
		})
	);

	const posts = unsorted_posts.sort((p, q) => q.date.getTime() - p.date.getTime());

	return { posts };
};

// import post image directly from each post src/routes/post/chiron-lilith/+page.svelte import chironLilith from '$lib/images/blog/chrion-lilith-jpg'
