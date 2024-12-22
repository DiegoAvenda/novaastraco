<script>
	import '../app.css';
	import Navbar from '../lib/components/navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';

	let { data, children } = $props();
</script>

<svelte:head>
	<title>NOVAASTRACO Official website: Tarot & Astrology</title>
</svelte:head>

<Navbar
	customerLastMessageFrom={data.customerLastMessageFrom}
	username={data.username}
	admin={data.admin}
/>

{@render children()}

<Footer />
