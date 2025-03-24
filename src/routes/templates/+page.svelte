<script>
	import { base } from '$app/paths'
	import TemplateCard from '$lib/components/TemplateCard.svelte'
</script>

<div class="grid grid-cols-1 gap-y-3 px-2">
	<div class="mx-4 my-4 grid grid-cols-2">
		<h2 class="text-3xl font-semibold">Szablony</h2>
		<a href="{base}/invoices/new" class="btn btn-lg btn-secondary"> Stwórz nowy </a>
	</div>

	<TemplateCard />
	<TemplateCard />
	<TemplateCard />
	<TemplateCard />
</div>
