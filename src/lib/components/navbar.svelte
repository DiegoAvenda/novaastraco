<script>
	import { page } from '$app/stores';
	import Bag from '$lib/components/bag.svelte';
	import { cart } from '$lib/utils/cart.svelte.js';
	import { onMount } from 'svelte';
	import {
		messageFromAdmin,
		newMessageFromAdmin,
		noMessageFromAdmin
	} from '$lib/utils/message-from-admin.svelte.js';

	let { username, admin, customerLastMessageFrom } = $props();

	let toggle = $state(false);
	let toggleBag = $state(false);

	const toggleButton = () => (toggle = !toggle);
	const toggleButtonBag = () => (toggleBag = !toggleBag);

	function clickOutside(node) {
		const handleClick = (event) => {
			if (!node.contains(event.target)) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	let adminUnansweredCount = $state(0);
	if (admin) {
		onMount(async () => {
			try {
				const response = await fetch('/api/unanswered-count');
				if (response.ok) {
					adminUnansweredCount = parseInt(await response.text(), 10);
				} else {
					console.error('Failed to fetch unanswered messages count');
				}
			} catch (err) {
				console.error('Error fetching unanswered messages:', err);
			}
		});
	}

	if (customerLastMessageFrom === 'vendor') {
		newMessageFromAdmin();
	}

	if (customerLastMessageFrom === 'customer') {
		noMessageFromAdmin();
	}
</script>

<header class="lg:pt-22 border-b p-4">
	<div class="relative flex h-16 items-center">
		<button
			aria-label="burguer"
			onclick={toggleButton}
			class="burger aspect-square w-5 bg-center bg-no-repeat xl:hidden"
		></button>
		<div
			class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center"
		>
			<a href="/"
				><h1 class="pointer-events-auto text-xl font-bold tracking-widest lg:text-4xl">
					NOVAASTRACO
				</h1></a
			>
		</div>
		<div class="ml-auto flex items-center gap-2 lg:mr-20">
			<!-- todo improve if else logic -->

			{#if admin}
				<div class="indicator">
					<a href="/admin/messages"><img class="w-5" src="/message.svg" alt="profile" /></a>
					<span class="badge indicator-item badge-xs">{adminUnansweredCount}</span>
				</div>
			{:else}
				<div class="indicator">
					<a href="/profile/message"><img class="w-5" src="/message.svg" alt="profile" /></a>
					<span class="badge indicator-item badge-xs">{messageFromAdmin.count}</span>
				</div>
			{/if}
			<div class="dropdown dropdown-end mx-2">
				<div tabindex="0" role="button">
					<div class="w-5">
						<img alt="profile" src="/profile.svg" />
					</div>
				</div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul
					tabindex="0"
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li>
						{#if admin}
							<a href="/admin" class="justify-between"> Admin pending orders </a>
							<a href="/admin/delivered" class="justify-between"> Admin delivered orders </a>
						{:else}
							<a href="/profile" class="justify-between">
								Pending orders
								<span class="badge">New</span>
							</a>
							<a href="/profile/delivered" class="justify-between"> Delivered orders </a>
						{/if}
					</li>
					{#if !username}
						<li><a href="/api/oauth/google">Login</a></li>
					{:else}
						<li>
							<form method="post" use:enhance action="/?/signOut">
								<button>Logout</button>
							</form>
						</li>
					{/if}
				</ul>
			</div>
			<button class="relative" onclick={toggleButtonBag}
				><img class="w-5" src="/shopping-bag.svg" alt="shopping bag icon" />
				{#if cart.length !== 0}
					<span class="absolute inset-0 ml-3 object-right-top">
						<div
							class="inline-flex items-center rounded-full border-2 border-white bg-black px-1.5 py-0.5 text-xs font-semibold leading-4 text-white"
						>
							{cart?.length}
						</div>
					</span>
				{/if}
			</button>
		</div>
	</div>
	<nav class:toggle>
		<button
			aria-label="burguer"
			onclick={toggleButton}
			class="{toggle
				? ''
				: 'hidden'} absolute right-4 top-4 aspect-square w-6 bg-center bg-no-repeat xl:hidden"
		></button>
		<ul class="font-semibold">
			<li><a href="/tarot" class:selected={$page.url.pathname === '/tarot'}>TAROT</a></li>
			<li>
				<a href="/tarot/birth-chart" class:selected={$page.url.pathname === '/tarot/birth-chart'}
					>ASTROLOGY</a
				>
			</li>
			<li>
				<a class="mr-8" href="/blog" class:selected={$page.url.pathname === '/blog'}>BLOG</a>
			</li>
			<li>
				<a href="/about" class:selected={$page.url.pathname === '/about'}>ABOUT NOVAASTRACO</a>
			</li>
		</ul>
	</nav>
	{#if toggleBag}
		<section class:toggleBag use:clickOutside onoutclick={toggleButtonBag}>
			<button
				aria-label="x"
				onclick={toggleButtonBag}
				class="absolute right-4 top-4 aspect-square w-6 bg-center bg-no-repeat"
			></button>
			<Bag />
		</section>
	{/if}
</header>

<style>
	section {
		position: fixed;
		z-index: 1000;
		gap: 9rem;
		top: 0;
		right: 0;
		bottom: 0;
		padding-top: 3.7rem;
		padding-left: 1.3rem;
		padding-right: 1.3rem;
		transform: translateX(100%);
		transition: transform 300ms ease-in-out;
		background: white;
	}

	section button {
		background-image: url(/icon-close.svg);
	}

	.toggleBag {
		transform: translateX(0);
	}

	.burger {
		background-image: url(/burguesa.svg);
	}

	ul {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 1.4rem;
	}

	nav button {
		background-image: url(/icon-close.svg);
	}

	.toggle {
		transform: translateX(0);
	}

	.selected {
		text-decoration: underline;
		text-underline-offset: 1.3rem;
		text-decoration-thickness: 3px;
	}

	@media (max-width: 1280px) {
		nav {
			position: fixed;
			z-index: 1000;
			gap: 9rem;
			top: 0;
			left: 0;
			bottom: 0;
			padding-top: 3.7rem;
			padding-left: 1.3rem;
			padding-right: 9rem;
			transform: translateX(-100%);
			transition: transform 300ms ease-in-out;
			background: white;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.selected {
			text-decoration: none;
		}
	}
</style>
