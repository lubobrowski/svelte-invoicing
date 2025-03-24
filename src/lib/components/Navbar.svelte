<script>
	import { base } from '$app/paths';
</script>

<div class="navbar bg-indigo-900 text-gray-300 shadow-sm">

	<!-- Brand -->
	<div class="flex-1">
		<a href="{base}/" class="btn btn-ghost text-xl">
			<span class="text-orange-500">Svelte</span>
			Invoicing
		</a>
	</div>

	<div class="flex gap-2">
		<!-- Hamburger Menu -->
		<div class="dropdown dropdown-end">
			<!-- Button -->
			<div tabindex="0" role="button" class="btn btn-ghost">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
			</div>

			<!-- Menu -->
			<ul tabindex="-1" class="menu menu-lg dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow">
				<li><a href="{base}/">Strona główna</a></li>
				<li><a href="{base}/invoices">Faktury</a></li>
				<li><a href="{base}/templates">Szablony</a></li>
				<li><a href="{base}/logout">Wyloguj</a></li>
			</ul>
		</div>
	</div>
</div>
