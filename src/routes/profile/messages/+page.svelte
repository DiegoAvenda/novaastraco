<script>
	import { noMessageFromAdmin } from '$lib/utils/message-from-admin.svelte.js';
	let { data, form } = $props();
	const customerId = data.customerId;
	const customerPicture = data.customerPicture;
	const customerName = data.customerName;
	const adminPicture =
		'https://lh3.googleusercontent.com/a/ACg8ocLQmuMaf61x_OFGuPqbUFJdI8gXPJdDBMyPIs1-16ft34EAS3mN=s96-c';

	if (form?.success) {
		noMessageFromAdmin();
	}
</script>

<div class="mx-3.5">
	<h1>Conversation with Lizzi</h1>

	{#each data.conversation as message}
		<div class={`${message.sender === 'customer' ? 'chat chat-start' : 'chat chat-end'}`}>
			<div class="w-10 rounded-full">
				<img
					alt="Tailwind CSS chat bubble component"
					src={message.sender === 'customer' ? customerPicture : adminPicture}
				/>
			</div>
		</div>

		{message.sender === 'customer' ? customerName : 'Lizzi'}
		<time class="text-xs opacity-50"
			>{message.createdAt.toLocaleTimeString('en-US', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			})}</time
		>

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
