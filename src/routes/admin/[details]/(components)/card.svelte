<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Form from '$lib/components/ui/form/index.js';
	let { order, item } = $props();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{item.name}</Card.Title>
		<Card.Description>{item.personalization}</Card.Description>
	</Card.Header>
	<Card.Content>
		{#if !order.delivered}
			<form action="?/uploadFile" method="post" enctype="multipart/form-data">
				<input type="file" name="file" />
				<input type="hidden" name="orderId" value={order._id} />
				<input type="hidden" name="readingId" value={item.readingId} />
				{#if item.reading}
					<Form.Button>Edit reading</Form.Button>
				{:else}
					<Form.Button>Ready</Form.Button>
				{/if}
			</form>
		{/if}
		{#if item.reading}
			<img class="w-20" src="data:image/jpeg;base64,{item.reading}" alt="Reading" />
		{/if}
	</Card.Content>
	<Card.Footer>child card footer</Card.Footer>
</Card.Root>
