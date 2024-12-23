<script>
	import { enhance } from '$app/forms';

	let { data, children } = $props();
</script>

<nav class="bg-white text-black shadow-md">
	<div class="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
		<div class="flex gap-6 text-lg">
			<a href="/profile/delivered" class="hover:underline">Delivered orders</a>
			<a href="/profile" class="hover:underline">Pending orders</a>
			<form method="post" use:enhance action="/?/signOut">
				<button>Logout</button>
			</form>
		</div>
	</div>
</nav>

{@render children()}
