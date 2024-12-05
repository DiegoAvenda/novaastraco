<script>
	let { data } = $props();
</script>

<div class="prose">
	<h2>Pending conversations</h2>
</div>

<table class="table m-2">
	<thead>
		<tr>
			<th>Customer</th>
		</tr>
	</thead>
	<tbody>
		{#each data.conversations as conversation}
			<tr>
				<th
					><a class="btn-ghost rounded-box" href={`/admin/messages/${conversation.googleId}`}
						>{conversation.name}</a
					></th
				>
			</tr>
		{/each}
	</tbody>
</table>
