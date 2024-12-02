<script>
	import { tarotReadings } from '$lib/utils/readings';
</script>

<div class="lg:flex lg:flex-row-reverse">
	<img
		class="h-[70vh] w-full object-cover lg:w-2/4"
		src="/images/birthchart.jpg"
		alt="tarot readings"
	/>
	<div class="lg:flex lg:w-2/4 lg:items-center lg:justify-center">
		<div class="flex flex-col items-center">
			<h1 class="my-4 text-center text-xl font-bold">TAROT READINGS</h1>
			<a href="https://www.etsy.com/shop/novaastraco?section_id=34974715" target="_blank"
				><button class="border-2 border-solid border-[#767676] p-3 text-[#1d1d1d]">DISCOVER</button
				></a
			>
		</div>
	</div>
</div>
<p class="mx-6 mb-14 mt-8 text-center sm:mx-28 lg:mx-36">
	Explore a realm of mystical possibilities as we unveil the ancient art of Tarot readings. Our
	website offers a diverse range of Tarot spreads, each designed to illuminate your path, answer
	your questions, and provide clarity to the mysteries that lie ahead. Embark on a journey of
	self-discovery and empowerment as you delve into the captivating world of Tarot. Discover the
	wisdom that lies within the cards and uncover the revelations they hold for you. Choose from our
	selection of Tarot readings and unlock the secrets that await your exploration.
</p>

<div class="my-3 flex justify-center">
	<div class="grid grid-cols-2 gap-6 lg:grid-cols-3">
		{#each tarotReadings as reading, i}
			<a href="/tarot/{i}">
				<div class="flex w-44 flex-col items-center">
					<img class="mb-4" src={reading.image} alt={reading.title} />
					<h3 class="font-bold">{reading.title}</h3>
					<p class="font-bold">${reading.price}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
