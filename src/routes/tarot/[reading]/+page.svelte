<script>
	import { addToCart } from '$lib/utils/cart.svelte.js';
	import { tarotReadings } from '$lib/utils/readings';
	import { page } from '$app/stores';

	let personalization = $state('');

	const readingIndex = $page.params.reading;
	const reading = tarotReadings[readingIndex];
</script>

<main class="mx-5 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-48">
	<div class="mb-6 items-center sm:flex sm:gap-10">
		<div class="flex flex-col gap-4 sm:flex sm:w-2/4 sm:flex-row-reverse">
			<img class="h-[28rem] object-contain" src={reading.image} alt={reading.name} />
		</div>
		<div class="sm:w-2/4">
			<div class="border-b-4 border-black pb-1">
				<h2 class="text-center text-xl font-bold">{reading.name}</h2>
			</div>
			<p class="my-12 text-center text-lg font-bold">${reading.price}</p>
			<input
				bind:value={personalization}
				type="text"
				name="personalization"
				placeholder="Add your personalization"
			/>
			{#if personalization !== ''}
				<div class="flex justify-center bg-black p-2">
					<button
						onclick={() => addToCart(reading, personalization, readingIndex)}
						class="text-white">ADD TO BAG</button
					>
				</div>
			{/if}
		</div>
	</div>
	<div class="flex flex-col items-center">
		<h3 class="text-xl font-bold">DETAILS</h3>
		<p class="my-3">{@html reading.details}</p>
	</div>
</main>
