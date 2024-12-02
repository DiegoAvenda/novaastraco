<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Form from '$lib/components/ui/form/index.js';
	import { tarotReadings } from '$lib/utils/readings';

	let { order, item } = $props();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{item.name}</Card.Title>
		<Card.Description>{item.personalization}</Card.Description>
	</Card.Header>
	<Card.Content>
		{#if order.delivered}
			<img class="w-20" src="data:image/jpeg;base64,{item.reading}" alt="Reading" />
		{/if}
	</Card.Content>
</Card.Root>
