<script>
	import { addToCart } from '$lib/utils/cart.svelte.js';
	import { tarotReadings } from '$lib/utils/readings';
	import { page } from '$app/stores';

	let personalization = $state('');
	let toastVisible = $state(false);
	let toastMessage = $state('');

	const readingIndex = $page.params.reading;
	const rawReading = tarotReadings[readingIndex];
	const reading = {
		name: rawReading.name,
		price: rawReading.price,
		image: rawReading.image
	};

	function handleAddToCart() {
		const added = addToCart(reading, personalization, readingIndex);
		toastMessage = added
			? '1 Reading added to shopping bag'
			: 'This reading with this personalization already exists in your bag';

		if (added) {
			personalization = ''; // Limpiar el campo si se agregó exitosamente
		}

		toastVisible = true;
		setTimeout(() => {
			toastVisible = false;
		}, 3000);
	}
</script>

<div class="mx-5 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-48">
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
					<button onclick={handleAddToCart} class="text-white"> ADD TO BAG </button>
				</div>
			{/if}
		</div>
	</div>
</div>

<div class="m-8 flex flex-col items-center">
	<h3 class="text-xl font-bold">DETAILS</h3>
	<p class="max-w-[530px] text-center">{@html rawReading.details}</p>
</div>

{#if toastVisible}
	<div class="fixed bottom-4 right-4 rounded-lg bg-black px-4 py-2 text-white shadow-lg">
		{toastMessage}
	</div>
{/if}
