<script>
	import { enhance } from '$app/forms';

	let { data, children } = $props();
</script>

<nav
	class="mx-auto flex max-w-6xl items-center justify-center bg-white px-6 py-4 text-black shadow-md"
>
	<div class="flex flex-col gap-6 text-lg md:flex-row">
		<a href="/profile/delivered" class="hover:underline">Delivered orders</a>
		<a href="/profile" class="hover:underline">Pending orders</a>
		<form method="post" use:enhance action="/?/signOut">
			<button>Logout</button>
		</form>
	</div>
</nav>

{@render children()}
