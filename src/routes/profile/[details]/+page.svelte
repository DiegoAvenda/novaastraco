<script>
	import Card from './(components)/card.svelte';
	import * as Cardi from '$lib/components/ui/card/index.js';
	import * as Form from '$lib/components/ui/form/index.js';

	let { data, form } = $props();

	const order = data.order;
</script>

<div class="m-4 flex flex-col items-center">
	<div class="prose">
		<h1>Order details page</h1>
		{#if data.order.delivered}
			<h2>Delivered order</h2>
		{:else}
			<h2>Pending order</h2>
		{/if}
	</div>

	<div class="m-4">
		<Cardi.Root>
			<Cardi.Header>
				<Cardi.Title>Total price: ${order.totalPrice}</Cardi.Title>
			</Cardi.Header>
			<Cardi.Content>
				{#each order.items as item}
					<Card {order} {item} />
				{/each}
			</Cardi.Content>
			<Cardi.Footer>
				<p>Created at: {order.createdAt}</p>
				{#if order.delivered}
					Delivered at: {order.deliveredAt}
				{/if}
			</Cardi.Footer>
		</Cardi.Root>
	</div>
</div>
