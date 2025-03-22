<script>
    import { page } from "$app/state";
</script>

<div class="card bg-error card-xl shadow-sm m-6">
	<div class="card-body">
		<h2 class="card-title">{page.status}</h2>
		<p>{page.error?.message}</p>
	</div>
</div>
