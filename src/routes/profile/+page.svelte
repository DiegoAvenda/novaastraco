<script>
	import { enhance } from '$app/forms';

	let { username, pendingOrders, deliveredOrders } = $props();
</script>

<p>Pending orders</p>

{#each pendingOrders as order}
	<a href={`/profile/${order._id}`}>
		<div class="font-medium">{order.items.length}</div>
		<div class="hidden text-sm text-muted-foreground md:inline">
			Created at: {order.createdAt}
		</div>
	</a>

	<p>{order.createdAt}</p>
	<p>${order.totalPrice}</p>
{/each}
{#if pendingOrders.length === 0}
	You don't have pending orders
{/if}

<p>Delivered orders</p>

{#each deliveredOrders as order}
	<a href={`/profile/${order._id}`}>
		<div class="flex items-center gap-4">
			<div class="grid gap-1">
				<p class="text-sm font-medium leading-none">Readings</p>
				<p class="text-sm text-muted-foreground">{order.items.length}</p>
			</div>
			<div class="ml-auto font-medium">${order.totalPrice}</div>
		</div>
	</a>
{/each}
