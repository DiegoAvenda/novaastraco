<script module>
	import Post from '$lib/components/Post.svelte';

	export let title = 'Chiron vs Lilith';
	export let date = new Date('2023-05-12');
	export let image = '/images/blog/chiron-lilith.jpg';
</script>

<Post {title} {date} {image}>
	<p>Which one is more important?</p>
	<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, repellendus!</p>
</Post>
