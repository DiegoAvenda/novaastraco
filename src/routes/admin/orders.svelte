<script>
	let { orders } = $props();
</script>

<div class="m-8">
	<div class="card m-4">
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<th>Customer</th>
						<th>Readings</th>
						<th>Created at</th>
						{#if orders[0].delivered}
							<th>Delivered at</th>
						{/if}

						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{#each orders as order}
						<tr>
							<th><a href={`/admin/${order._id}`}>{order.customerName}</a></th>
							<td>{order.items.length}</td>
							<td>{order.createdAt}</td>
							{#if order.delivered}
								<td>{order.deliveredAt}</td>
							{/if}
							<td>${order.totalPrice}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
