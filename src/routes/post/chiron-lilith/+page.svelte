<script module>
	import Post from '$lib/components/Post.svelte';

	export let title = 'Chiron vs Lilith';
	export let date = new Date('2023-05-12');
	export let image = '/images/blog/chiron-lilith.jpg';
</script>

<Post {title} {date} {image}>
	<p class="text-center">Which one is more important?</p>
	<p class="mx-4 text-center">
		Chiron and Lilith serve different purposes in astrology, so which one is more important depends
		on what you're focusing on. Chiron is all about deep wounds and healing. It represents the areas
		in life where you’ve been hurt the most, often in ways that feel karmic or deeply ingrained. But
		it also shows how you can turn that pain into wisdom, both for yourself and others. It’s
		connected to personal growth, overcoming struggles, and learning to heal from past experiences.
		Lilith, on the other hand, is about raw, untamed energy. It deals with the parts of yourself
		that have been rejected, suppressed, or shamed, particularly when it comes to sexuality,
		independence, and power. Lilith doesn’t seek healing the way Chiron does; instead, it demands
		recognition and refuses to conform. It’s about embracing what society might deem taboo or
		uncomfortable. So if you're focused on personal healing and inner transformation, Chiron plays a
		bigger role. But if you're exploring themes of empowerment, rebellion, and embracing your
		darker, more instinctual side, Lilith becomes more significant. They can also work
		together—Chiron might show where you've been wounded, while Lilith reveals the ways you reclaim
		your power.
	</p>
</Post>
