<script>
	import '../app.css';
	import Navbar from '../lib/components/navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { enhance } from '$app/forms';

	let { data, children } = $props();

	let isAdmin = $state(data.admin);
</script>

<svelte:head>
	<title>NOVAASTRACO Official website: Tarot & Astrology</title>
</svelte:head>

{#if !isAdmin}
	<form method="post" action="/?/adminMode">
		<button
			class="absolute m-1 rounded bg-black px-3 py-1 text-xs text-gray-300 opacity-50 transition-all hover:bg-black hover:opacity-100"
			>Become admin</button
		>
	</form>
{/if}

<div class="flex min-h-screen flex-col">
	<Navbar
		customerLastMessageFrom={data.customerLastMessageFrom}
		username={data.username}
		admin={isAdmin}
	/>
	<div class="grow">
		{@render children()}
	</div>
	<Footer />
</div>
