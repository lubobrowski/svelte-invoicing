<script lang="ts">
    import { base } from '$app/paths';
	import InvoiceCard from '$lib/components/InvoiceCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
</script>

<div class="grid grid-cols-1">
    <div class="grid grid-cols-2 m-4">
        <h2 class="text-3xl font-semibold">Faktury</h2>
        <a href="{base}/invoices/new" class="btn btn-lg btn-secondary">
            Wystaw nową
        </a>    
    </div>

    <Pagination />

    <InvoiceCard />
    <InvoiceCard />
    <InvoiceCard />

    <Pagination />
</div>
