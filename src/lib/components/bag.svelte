<script>
	import { removeFromCart, cart } from '$lib/utils/cart.svelte.js';

	let totalPrice = $derived(cart.reduce((sum, item) => sum + item.price, 0));
</script>

<div>
	<h2 class="text-xl font-bold">SHOPPING BAG</h2>

	{#if cart?.length === 0}
		<p>Your shopping bag is empty</p>
	{:else}
		<ul>
			{#each cart as cartItem}
				<div class="mt-16 flex gap-2 border-b">
					<img class="w-16" src={cartItem.image} alt={cartItem.name} />
					<div>
						<p class="font-bold">{cartItem.name}</p>
						<p>{cartItem.personalization}</p>
						<button
							onclick={() => removeFromCart(cartItem.id)}
							class="text-[#767676] underline decoration-[#767676]">Remove</button
						>
						<div class="flex justify-between">
							<p class="ml-28 font-bold text-[#333333]">${cartItem.price}</p>
						</div>
					</div>
				</div>
			{/each}
		</ul>
		<div class="flex justify-center">
			<span class="text-info">Subtotal: ${totalPrice}</span>
			<a href="/checkout/{totalPrice}"
				><button class="mt-16 bg-black px-14 py-2 text-white">Checkout</button></a
			>
		</div>
	{/if}
</div>
