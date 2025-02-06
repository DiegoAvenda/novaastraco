<script>
	const frontPageImages = [
		{
			title: 'TAROT + MAGIC',
			subtitle: 'TAROT. DIVINATION & ASTROLOGY',
			link: '/tarot',
			backgroundImageUrl: '/images/tarot-hero.jpg'
		},
		{
			title: "WHAT'S NEW",
			subtitle: 'YOUR PAST LIFE',
			link: '/tarot/9',
			backgroundImageUrl: '/images/future-self.jpg'
		},
		{
			title: 'TAROT',
			subtitle: 'YOUR FUTURE PARTNER',
			link: '/tarot/0',
			backgroundImageUrl: '/images/partner.jpg'
		},
		{
			title: 'ASTROLOGY',
			subtitle: 'BIRTH CHART',
			link: '/tarot/10',
			backgroundImageUrl: '/images/birthchart.jpg'
		}
	];
</script>

{#each frontPageImages as frontPageImage}
	<section
		class="flex h-[70vh] flex-col items-center justify-end bg-cover bg-center bg-no-repeat pb-20 font-semibold text-white"
		style="background-image: url({frontPageImage.backgroundImageUrl})"
	>
		<h2>{frontPageImage.title}</h2>
		<h3 class="text-2xl sm:text-3xl lg:text-4xl">{frontPageImage.subtitle}</h3>
		<a href={frontPageImage.link}
			><button class="mt-4 bg-white p-4 text-sm text-black">SEE MORE</button></a
		>
	</section>
{/each}

<style>
	section {
		text-shadow: 0 0 6px rgb(0 0 0 / 60%);
	}
</style>
