<script>
	import { onMount } from 'svelte';
	import { noMessageFromAdmin } from '$lib/utils/message-from-admin.svelte.js';

	let { data, form } = $props();
	const customerId = data.customerId;
	const customerPicture = data.customerPicture;
	const customerName = data.customerName;
	const adminPicture =
		'https://lh3.googleusercontent.com/a/ACg8ocLQmuMaf61x_OFGuPqbUFJdI8gXPJdDBMyPIs1-16ft34EAS3mN=s96-c';

	let chatContainer;

	onMount(() => {
		scrollToBottom();
	});

	function scrollToBottom() {
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	}

	if (form?.success) {
		noMessageFromAdmin();
		// Scroll to bottom after new message is added
		setTimeout(scrollToBottom, 0);
	}
</script>

<div class="m-8 mx-auto max-w-2xl bg-white p-8 text-black shadow-lg">
	<div class="mb-6">
		<h1 class="mb-4 text-2xl font-semibold tracking-wide">Conversation with Lizzi</h1>

		<div bind:this={chatContainer} class="max-h-[35vh] overflow-y-auto">
			{#each data.conversation as message}
				<div class={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'} mb-4`}>
					<div class="max-w-xs rounded-lg bg-gray-100 px-4 py-2 text-black">
						{message.content}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<form method="post" class="mt-6">
		<input type="hidden" name="customerId" value={customerId} />
		<div class="flex gap-2">
			<input
				class="flex-grow rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
				type="text"
				name="message"
				placeholder="Type a message..."
			/>
			<button
				class="rounded-lg bg-black px-6 py-2 text-white transition-colors hover:bg-gray-800"
				type="submit"
			>
				Send
			</button>
		</div>
	</form>
</div>
