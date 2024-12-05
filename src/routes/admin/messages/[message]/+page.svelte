<script>
	import { oneMessageFromCustomerLess } from '$lib/utils/message-from-customer.svelte.js';

	let { data, form } = $props();
	const customerId = data.customerId;
	const customerPicture = data.customer.picture;
	const adminPicture = data.adminPicture;

	if (form?.success) {
		oneMessageFromCustomerLess();
	}
</script>

<div class="card shadow-xl">
	<div class="card-body">
		<h1 class="card-title">Conversation with {data.customer.name}</h1>

		{#each data.conversation as message}
			<div class={`${message.sender === 'customer' ? 'chat chat-start' : 'chat chat-end'}`}>
				<div class="chat-bubble">
					{message.content}
				</div>
			</div>
		{/each}

		<form method="post">
			<input type="hidden" name="customerId" value={customerId} />
			<div class="mt-4 flex gap-2">
				<input class="input input-bordered w-screen" type="text" name="message" />
				<button class="btn btn-primary">Send</button>
			</div>
		</form>
	</div>
</div>
