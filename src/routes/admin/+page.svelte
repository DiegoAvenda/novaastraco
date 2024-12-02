<script>
	import Dashboard_01 from './(components)/dashboard-01.svelte';

	let { data, form } = $props();
</script>

<Dashboard_01
	deliveredOrders={data.deliveredOrders}
	pendingOrders={data.pendingOrders}
	userPicture={data.userPicture}
	username={data.username}
/>
