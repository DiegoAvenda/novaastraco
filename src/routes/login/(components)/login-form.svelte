<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<Card.Root class="mx-auto max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Login</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="grid gap-4">
			<Button type="submit" class="w-full"><a href="/api/oauth/google">Login with Google</a></Button
			>
		</div>
	</Card.Content>
</Card.Root>
