<script>
	let { data } = $props();
</script>

<h1>Conversations</h1>
<br />

<div class="flex w-72 flex-col space-y-2">
	{#each data.conversations as conversation}
		<a href={`/admin/messages/${conversation.googleId}`}>Conversation with: {conversation.name} </a>
	{/each}
</div>

{#each data.conversation as message}
	<div class={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'}`}>
		<div
			class={`max-w-xs rounded-lg p-3 ${
				message.sender === 'customer' ? 'bg-gray-200 text-gray-900' : 'bg-blue-500 text-white'
			}`}
		>
			{message.content}
		</div>
	</div>
{/each}
