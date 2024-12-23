<script>
	let { data } = $props();
	const order = data.order;

	let toggle = $state(false);
</script>

<div class="m-8 flex flex-col items-center">
	<div class="text-center">
		<h1 class="text-2xl font-bold">Delivered Order</h1>
	</div>
	<div class="mt-8 w-full max-w-3xl">
		<div class="mb-6">
			<h3>
				Total Price: <span class="font-medium">${order.totalPrice}</span>
			</h3>
		</div>
		<div class="space-y-4">
			{#each order.items as item}
				<div class="rounded-md border border-gray-300 p-4 shadow-sm">
					<div class="flex flex-col">
						<h4 class="font-semibold">{item.name}</h4>
						<p class="text-sm">Personalization: {item.personalization}</p>
						<figure class="mt-4">
							<img src="data:image/jpeg;base64,{item.reading}" alt={item.name} class="rounded-md" />
						</figure>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<p class="text-sm font-medium">Created at: {order.createdAt}</p>
			<p class="text-sm font-medium">Delivered at: {order.deliveredAt}</p>
		</div>
	</div>
</div>
