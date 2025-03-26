<script lang="ts">
  import { base } from '$app/paths'
  import InvoiceCard from '$lib/components/InvoiceCard.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
	import { randomInvoices } from '$lib/utils';
</script>

<div class="grid grid-cols-1 gap-y-3 px-2">
  <div class="mx-4 my-4 grid grid-cols-2">
    <h2 class="text-3xl font-semibold">Faktury</h2>
    <a href="{base}/invoices/new" class="btn btn-lg btn-secondary"> Wystaw nową </a>
  </div>

  <Pagination />

  {#await randomInvoices(6)}
    <p>Loading...</p>
  {:then invoices} 
    {#each invoices as invoice}
      <InvoiceCard invoice={invoice} />
    {/each}
  {/await}

  <Pagination />
</div>
