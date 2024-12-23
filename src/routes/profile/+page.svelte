<script>
	import { enhance } from '$app/forms';

	let { data } = $props();
	// const username = data.username
</script>

<div class="m-6 flex flex-col items-center gap-4">
	<h1 class="flex justify-center text-3xl text-black">Pending orders</h1>

	<div class="flex flex-col items-center gap-6 text-center text-black">
		{#each data.orders as order (order._id)}
			<div class="w-96 rounded-lg border border-gray-300 bg-white text-black shadow-md">
				<div class="p-6">
					<p>
						Total Price: ${order.totalPrice}
					</p>
					{#each order.items as item}
						<div class="my-4 rounded-lg border border-gray-200 bg-gray-50 shadow-sm">
							<div class="p-4">
								<h2 class="text-lg font-medium text-black">{item.name}</h2>
							</div>
						</div>
					{/each}
					<p>Ordered at {order.createdAt}</p>
				</div>
			</div>
		{/each}
	</div>

	{#if data.orders.length === 0}
		<p>You don't have pending orders</p>
	{/if}
</div>
