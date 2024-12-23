<script module>
	import Post from '$lib/components/Post.svelte';

	export let title = 'Ascendant, Moon and Sun sign';
	export let date = new Date('2023-01-22');
	export let image = '/images/blog/ascendant-moon-sun.jpg';
</script>

<Post {title} {date} {image}>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error dignissimos ipsa
		facere cum sit ipsum et iure facilis sunt? Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Ad nulla doloremque quod, vel quo architecto itaque. Repellat quisquam tempore harum rem
		totam excepturi officia nesciunt laboriosam doloribus, repellendus est praesentium!
	</p>
</Post>
