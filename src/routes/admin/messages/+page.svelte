<script>
	let { data } = $props();
</script>

<div class="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<div class="space-y-8">
			<h2 class="text-center text-2xl font-light uppercase tracking-wider">
				Pending conversations
			</h2>

			<div class="overflow-hidden border border-gray-100">
				<table class="min-w-full divide-y divide-gray-100">
					<thead>
						<tr>
							<th class="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
								Customer
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-100">
						{#each data.conversations as conversation}
							<tr class="transition-colors hover:bg-gray-50">
								<td class="px-6 py-4">
									<a
										href={`/admin/messages/${conversation.googleId}`}
										class="text-sm font-light transition-colors hover:text-gray-600"
									>
										{conversation.name}
									</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
