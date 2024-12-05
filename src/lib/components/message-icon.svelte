<script>
	let { href, unAnsweredMessage } = $props();
</script>

<div>
	<div class="indicator">
		<a {href} aria-label="Messages">
			<svg
				class="h-5 w-5"
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 348.165 348.165"
				xml:space="preserve"
				fill="#f2eded"
				stroke="#f2eded"
				stroke-width="6.963300000000001"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<g>
						<g>
							<polygon
								style="fill:#0a0a0a;"
								points="0,60.58 0,71.921 174.083,193.19 348.165,71.921 348.165,60.58 "
							></polygon>
							<polygon
								style="fill:#0a0a0a;"
								points="174.083,217.356 71.545,145.228 0,95.39 0,287.585 348.165,287.585 348.165,95.39 276.62,145.228 "
							></polygon>
						</g>
					</g>
				</g></svg
			>
		</a>
		<span class="badge indicator-item badge-xs">{unAnsweredMessage}</span>
	</div>
</div>
