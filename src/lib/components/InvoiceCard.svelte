<script lang="ts">
	import { base } from '$app/paths'

	const buyer = `SZPITAL SPECJALISTYCZNY IM. ŚWIĘTEJ RODZINY				
SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ`
</script>

<div class="card card-sm bg-base-100 shadow-sm">
	<div class="card-body">
		<div class="grid grid-cols-2">
			<h2 class="card-title text-xl">Nr 14/2025</h2>
			<p class="text-right text-lg font-semibold">2025-02-28</p>
			<p class="mt-2 text-sm">{buyer}</p>
			<p class="mt-2 text-right text-lg font-bold">12 364,50 PLN</p>
		</div>
		<div class="card-actions justify-end">
			<button class="btn btn-sm btn-square">
				<img src="{base}/icons/printer.svg" alt="Drukuj" class="w-5" />
			</button>
			<button class="btn btn-sm btn-square">
				<img src="{base}/icons/view-show.svg" alt="Szczegóły" class="w-5" />
			</button>
		</div>
	</div>
</div>
