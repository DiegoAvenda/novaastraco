<script module>
	import Post from '$lib/components/Post.svelte';

	export let title = 'Descendant vs South node';
	export let date = new Date('2023-07-30');
	export let image = '/images/blog/descendant-south.jpg';
</script>

<Post {title} {date} {image}>
	<p>
		Which one you should pay more attention? Lorem, ipsum dolor sit amet consectetur adipisicing
		elit. In, repellendus!
	</p>
</Post>
