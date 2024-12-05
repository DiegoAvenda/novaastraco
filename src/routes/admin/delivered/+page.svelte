<script>
	import Orders from '../orders.svelte';

	let { data } = $props();
</script>

<div class="m-8">
	Delivered orders
	<Orders orders={data.orders} />
</div>
