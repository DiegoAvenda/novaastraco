<script>
	let { data, form } = $props();
	const order = data.order;

	let toggle = $state(false);
</script>

<div class="m-8 flex flex-col items-center">
	<div class="text-center">
		{#if order.delivered}
			<h1 class="text-2xl font-bold">Delivered Order</h1>
		{:else}
			<h1 class="text-2xl font-bold">Pending Order</h1>
		{/if}
	</div>

	<div class="mt-8 w-full max-w-3xl">
		<div class="mb-6">
			<h2 class="text-lg font-semibold">{order.customerName}</h2>
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
						{#if item.reading}
							<figure class="mt-4">
								<img
									src="data:image/jpeg;base64,{item.reading}"
									alt={item.name}
									class="rounded-md"
								/>
							</figure>
						{/if}
					</div>
					{#if !order.delivered}
						<div class="mt-4">
							<form
								action="?/uploadFile"
								method="post"
								enctype="multipart/form-data"
								class="space-y-2"
							>
								<input type="hidden" name="orderId" value={order._id} />
								<input type="hidden" name="readingId" value={item.readingId} />
								<input
									type="file"
									name="file"
									class="block w-full text-sm file:mr-4 file:rounded-md file:border file:border-gray-300 file:bg-gray-50 file:px-4 file:py-2 file:text-sm file:font-semibold hover:file:bg-gray-100"
								/>
								<div class="text-right">
									<button class="rounded-md px-4 py-2 text-sm text-white hover:bg-gray-700">
										{#if item.reading}
											Edit Reading
										{:else}
											Ready
										{/if}
									</button>
								</div>
							</form>
						</div>
					{/if}
				</div>
			{/each}
		</div>
		{#if !order.delivered}
			{#if order.items.every((item) => item.reading !== null && item.reading !== undefined)}
				<button
					onclick={() => (toggle = !toggle)}
					class="mt-8 w-full rounded-md bg-black py-3 text-sm text-white hover:bg-gray-700"
					>Deliver</button
				>

				{#if toggle}
					<div class="mt-4 rounded-md border border-gray-300 bg-white p-6 shadow-md">
						<h2 class="text-center text-lg font-semibold">Are you sure?</h2>
						<div class="mt-4 flex justify-between">
							<form action="?/deliverReading" method="post">
								<input type="hidden" name="orderId" value={order._id} />
								<button
									class="rounded-md bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700"
									>Yes</button
								>
							</form>
							<button
								class="rounded-md bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
								onclick={() => (toggle = !toggle)}>No</button
							>
						</div>
					</div>
				{/if}
			{/if}
		{:else}
			<div class="mt-8 text-center">
				<p class="text-sm font-medium">Created at: {order.createdAt}</p>
				<p class="text-sm font-medium">Delivered at: {order.deliveredAt}</p>
			</div>
		{/if}
	</div>
</div>
