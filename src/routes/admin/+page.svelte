<script>
	import Orders from './orders.svelte';

	let { data } = $props();
</script>

<div class="prose mt-2 flex justify-center">
	<h1>Pending orders</h1>
</div>
<Orders orders={data.orders} />
