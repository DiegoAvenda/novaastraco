<script>
	let { data } = $props();
</script>

<h1 class="mt-2 flex justify-center text-3xl text-black">Delivered orders</h1>

<div class="my-3 flex flex-col items-center gap-6 text-center text-black">
	{#each data.orders as order (order._id)}
		<a href="/admin/{order._id}">
			<div class="w-96 rounded-lg border border-gray-300 bg-white text-black shadow-md">
				<div class="p-6">
					<p class="text-xl font-medium tracking-wide">Customer: {order.customerName}</p>
					<p>
						Total Price: ${order.totalPrice}
					</p>
					{#each order.items as item}
						<div class="mt-4 rounded-lg border border-gray-200 bg-gray-50 shadow-sm">
							<div class="p-4">
								<h2 class="text-lg font-medium text-black">{item.name}</h2>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</a>
	{/each}
</div>

{#if data.orders.length === 0}
	<p>You don't have delivered orders</p>
{/if}
