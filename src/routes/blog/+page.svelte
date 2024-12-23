<script>
	/** @type {{data: any}} */
	let { data } = $props();
	const { posts } = data;
</script>

<svelte:head>
	<title>NovaastraCo Blog</title>
</svelte:head>

<section>
	<h1 class="my-16 text-center text-5xl font-bold">NovastraaCo Blog</h1>
	{#each posts as post}
		<div class="mb-28 flex flex-col items-center">
			<a class="mb-10" href="/post/{post.link}"
				><img class="w-80" src={post.image} alt={post.title} /></a
			>
			<span class="mb-2">{post.date.toLocaleDateString()}</span>
			<a class="text-lg font-bold" href="/post/{post.link}">{post.title}</a>
		</div>
	{/each}
</section>
