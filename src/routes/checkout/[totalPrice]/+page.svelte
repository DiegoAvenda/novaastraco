<script>
	import { page } from '$app/stores';
	import { cart } from '$lib/utils/cart.svelte.js';

	let { data } = $props();

	let totalPrice = $page.params.totalPrice;
	let toggleCheckout = $state(false);

	async function checkout() {
		if (data.customerId === null) {
			toggleCheckout = true;
			return;
		}

		await fetch('/api/stripe/checkout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ items: cart, customerId: data.customerId })
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				window.location.replace(data.url);
			});
	}
</script>

<div class="m-6 flex justify-center">
	<div class="card bg-base-100 shadow-xl">
		<div class="card-body items-center text-center">
			<div class="card-actions">
				<button class="mt-4 bg-white p-4 text-sm text-black" onclick={() => checkout()}
					>Go to checkout</button
				>
			</div>
			{#if toggleCheckout}
				<span>Login first</span>
			{/if}
		</div>
	</div>
</div>
