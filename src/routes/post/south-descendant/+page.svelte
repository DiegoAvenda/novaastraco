<script module>
	import Post from '$lib/components/Post.svelte';

	export let title = 'Descendant vs South node';
	export let date = new Date('2023-07-30');
	export let image = '/images/blog/descendant-south.jpg';
</script>

<Post {title} {date} {image}>
	<p class="text-center">Which one you should pay more attention?</p>
	<p class="mx-4 text-center">
		The Descendant and the South Node serve very different roles in a birth chart, so which one you
		should pay more attention to depends on what you’re trying to understand about yourself. The
		Descendant (DSC) is the point opposite your Ascendant and represents relationships,
		partnerships, and what you seek (or attract) in others. It can show the qualities you
		unconsciously project onto people, especially in close relationships. It’s also an indicator of
		what kind of balance you need in your life—since it’s the counterpart to your Ascendant, it
		often reflects traits you need to integrate rather than just seek in others. The South Node
		(SN), on the other hand, is tied to past life experiences, ingrained habits, and what comes
		naturally to you. It represents comfort zones, but also stagnation if you stay too attached to
		it. The South Node is where you've already been, and while it can bring ease, it’s not where
		you're meant to grow—its opposite, the North Node, is where evolution happens. If you’re focused
		on relationships, attraction, and how you interact with others, the Descendant is more relevant.
		But if you're looking at karmic patterns, life purpose, and personal growth, the South Node
		gives deeper insight. Both can be important at different times, and they actually connect—often,
		we attract Descendant-like people because of our South Node patterns, and moving toward our
		North Node helps us develop healthier relationships. What’s your main focus right
		now—relationships or personal evolution?
	</p>
</Post>
