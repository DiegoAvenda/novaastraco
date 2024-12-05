<script>
	let { data, form } = $props();
	const order = data.order;

	let toggle = $state(false);
</script>

<div class="m-8 flex flex-col items-center">
	<div class="prose">
		{#if order.delivered}
			<h1>Delivered order</h1>
		{:else}
			<h1>Pending order</h1>
		{/if}
	</div>

	<div class="m-8">
		<div class="prose">
			<h2>{order.customerName}</h2>
			<h3>Total price: ${order.totalPrice}</h3>
		</div>
		<div class="flex flex-col gap-2">
			{#each order.items as item}
				<div class="card w-96 bg-base-100 shadow-xl">
					<div class="card-body">
						<h4 class="card-title">{item.name}</h4>
						<p>{item.personalization}</p>
						{#if item.reading}
							<figure>
								<img src="data:image/jpeg;base64,{item.reading}" alt={item.name} />
							</figure>
						{/if}
						{#if !order.delivered}
							<div class="card-actions mt-2">
								<form action="?/uploadFile" method="post" enctype="multipart/form-data">
									<input type="hidden" name="orderId" value={order._id} />
									<input type="hidden" name="readingId" value={item.readingId} />

									<input class="mb-4" type="file" name="file" />
									<div class="flex justify-end">
										{#if item.reading}
											<button class="btn btn-primary"> Edit reading</button>
										{:else}
											<button class="btn btn-primary">Ready</button>
										{/if}
									</div>
								</form>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
		{#if !order.delivered}
			{#if order.items.every((item) => item.reading !== null && item.reading !== undefined)}
				<button onclick={() => (toggle = !toggle)} class="btn btn-primary mt-4 w-96">Deliver</button
				>

				{#if toggle}
					<div class="card w-96">
						<div class="card-body items-center text-center">
							<h2 class="card-title">Are you sure?</h2>
							<div class="card-actions justify-end">
								<form action="?/deliverReading" method="post">
									<input type="hidden" name="orderId" value={order._id} />
									<button class=" btn-align btn btn-primary">Yes</button>
								</form>
								<button class="btn btn-primary" onclick={() => (toggle = !toggle)}>No</button>
							</div>
						</div>
					</div>
				{/if}
			{/if}
		{:else}
			<div class="mt-8 flex flex-col items-center">
				<div class="mt-2 flex flex-col items-center font-bold">
					<p>Created at: {order.createdAt}</p>
					<p>Delivered at: {order.deliveredAt}</p>
				</div>
			</div>
		{/if}
	</div>
</div>
