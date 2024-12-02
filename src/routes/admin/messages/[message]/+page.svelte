<script>
	import { oneMessageFromCustomerLess } from '$lib/utils/message-from.customer.svelte.js';

	let { data, form } = $props();
	const customerId = data.customerId;
	const customerPicture = data.customer.picture;
	const adminPicture = data.adminPicture;

	if (form?.success) {
		oneMessageFromCustomerLess();
	}
</script>

<div class="mx-3.5">
	<h1>Conversation with {data.customer.name}</h1>

	{#each data.conversation as message}
		<div class={`${message.sender === 'customer' ? 'chat chat-start' : 'chat chat-end'}`}>
			<div class="w-10 rounded-full">
				<img
					alt="Tailwind CSS chat bubble component"
					src={message.sender === 'customer' ? customerPicture : adminPicture}
				/>
			</div>
		</div>
		{message.content}
	{/each}

	<form method="post">
		<input type="hidden" name="customerId" value={customerId} />
		<div class="flex">
			<input class="w-screen" type="text" name="message" />
			<button>Send</button>
		</div>
	</form>
</div>
