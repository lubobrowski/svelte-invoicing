<script>
	import { page } from '$app/state'
</script>

<div class="card bg-error card-xl m-6 shadow-sm">
	<div class="card-body">
		<h2 class="card-title">{page.status}</h2>
		<p>{page.error?.message}</p>
	</div>
</div>
