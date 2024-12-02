<script>
	import Dashboard_01 from './(components)/dashboard-01.svelte';

	let { data } = $props();
</script>

<Dashboard_01
	deliveredOrders={data.deliveredOrders}
	pendingOrders={data.pendingOrders}
	username={data.username}
/>
