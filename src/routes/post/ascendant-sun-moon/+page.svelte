<script module>
	import Post from '$lib/components/Post.svelte';

	export let title = 'Ascendant, Moon and Sun sign';
	export let date = new Date('2023-01-22');
	export let image = '/images/blog/ascendant-moon-sun.jpg';
</script>

<Post {title} {date} {image}>
	<p class="mx-4 text-center">
		Your Ascendant (Rising sign), Moon, and Sun are the three core pillars of your birth chart, each
		representing a different aspect of who you are. The Ascendant (Rising sign) is your outer self,
		how you present yourself to the world, and the "mask" people see when they first meet you. It
		shapes your approach to life, your instincts, and even your physical appearance. It’s like the
		filter through which you experience the world and how others perceive you in return. The Moon
		sign represents your inner world—your emotions, subconscious patterns, and what makes you feel
		safe and nurtured. It’s how you react instinctively to situations and how you process feelings.
		The Moon shows what you need to feel emotionally secure and comfortable. The Sun sign is your
		core identity, ego, and life purpose. It’s the driving force behind your personality and
		represents your vitality and sense of self. While the Moon governs emotions and the Ascendant
		controls first impressions, the Sun is about who you are at your essence, especially as you grow
		into your full potential. Together, these three signs form the foundation of your personality.
		The Ascendant is how you start things and interact with the world, the Moon is how you feel and
		react, and the Sun is what fuels your sense of purpose. If you’ve ever felt like your Sun sign
		alone doesn’t fully describe you, looking at your Moon and Ascendant gives a much more complete
		picture.
	</p>
</Post>
