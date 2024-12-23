<script>
	import '../app.css';
	import Navbar from '../lib/components/navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';

	let { data, children } = $props();
</script>

<svelte:head>
	<title>NOVAASTRACO Official website: Tarot & Astrology</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar
		customerLastMessageFrom={data.customerLastMessageFrom}
		username={data.username}
		admin={data.admin}
	/>
	<div class="grow">
		{@render children()}
	</div>
	<Footer />
</div>
