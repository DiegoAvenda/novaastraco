<script>
	const frontPageImages = [
		{
			title: 'TAROT + MAGIC',
			subtitle: 'TAROT. DIVINATION & ASTROLOGY',
			link: 'https://www.etsy.com/shop/novaastraco',
			backgroundImageUrl: '/images/tarot-hero.jpg'
		},
		{
			title: "WHAT'S NEW",
			subtitle: 'MESSAGES FROM YOUR FUTURE SELF',
			link: 'https://www.etsy.com/listing/1510329589/mensaje-de-su-yo-futuro-lectura-de-tarot?click_key=9a78b9151419f9fed9363f7a37fe08e6f8c55a38%3A1510329589&click_sum=b8155284&ref=shop_home_active_1&crt=1',
			backgroundImageUrl: '/images/future-self.jpg'
		},
		{
			title: 'TAROT',
			subtitle: 'YOUR FUTURE PARTNER',
			link: 'https://www.etsy.com/listing/1051916680/your-next-relationship-tarot-Product-24?click_key=b9478a736243d1d1717d6965b132e757ba4d2d06%3A1051916680&click_sum=b88e4f9b&ref=shop_home_active_9&frs=1&crt=1',
			backgroundImageUrl: '/images/partner.jpg'
		},
		{
			title: 'ASTROLOGY',
			subtitle: 'BIRTH CHART',
			link: 'https://www.etsy.com/listing/1069156265/astrology-birth-chart-in-depth-Product?click_key=d80c9c223fe037c6eea5007aed33ca5738aba87b%3A1069156265&click_sum=cb32e58c&ref=shop_home_active_8',
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
		<a href={frontPageImage.link} target="_blank"
			><button class="mt-4 bg-white p-4 text-sm text-black">SEE MORE</button></a
		>
	</section>
{/each}

<style>
	section {
		text-shadow: 0 0 6px rgb(0 0 0 / 60%);
	}
</style>
