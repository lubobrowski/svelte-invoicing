<script>
	import Loginform from '../components/loginform.svelte';
</script>

<div class="hero bg-base-300 min-h-screen">
	<div class="hero-content flex-col">
		<div class="">
			<h1 class="text-5xl font-bold">Login</h1>
			<p class="py-6">Please log in in order to use this page.</p>
		</div>
		<div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
			<div class="card-body">
				<Loginform />
			</div>
		</div>
	</div>
</div>
