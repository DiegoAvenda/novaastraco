<script>
	/** @type {{title: any, date: any, image: any, children?: import('svelte').Snippet}} */
	let { title, date, image, children } = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="mt-10 flex flex-col items-center">
	<img class="mb-10 w-80" src={image} alt={title} />
	<span class="mb-2">{date.toLocaleDateString()}</span>
	<h2 class="mb-4 text-lg font-bold">{title}</h2>
	<div class="mx-4 mb-28 md:max-w-prose">
		{@render children?.()}
	</div>
</div>
