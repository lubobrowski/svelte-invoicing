<script lang="ts">
  import { base } from '$app/paths'
  import InvoiceCard from '$lib/components/InvoiceCard.svelte'
	import { loadInvoices } from '$lib/data';
  import type { InvoiceListDto } from '$lib/models/types'
  import { onMount } from 'svelte'

  let invoices: InvoiceListDto[] = [];
  let page = 0;
  const perPage = 5;
  let loading = false;
  let allDataLoaded = false;

  async function loadMore() {
    if (loading || allDataLoaded) return;
    loading = true;

    const newInvoices = await loadInvoices(page, perPage);
    if (newInvoices.length === 0) {
      allDataLoaded = true;
    } else {
      invoices = [...invoices, ...newInvoices];
      page += 1;
    }

    loading = false;
  }

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      loadMore();
    }
  }

  onMount(() => {
    loadMore();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

</script>

<div class="grid grid-cols-1 gap-y-3 px-2 pb-24">
  <div class="mx-4 my-4 grid grid-cols-2">
    <h2 class="text-3xl font-semibold">Faktury</h2>
  </div>

  {#each invoices as invoice}
    <InvoiceCard invoice={invoice} />
  {/each}

  {#if loading}
    <p class="loading loading-spinner loading-xl mx-auto mt-4 text-center"></p>
  {/if}
  {#if allDataLoaded && invoices.length > 0}
    <p class="text-center">Nie ma więcej do wyświetlenia.</p>
  {/if}
  {#if invoices.length === 0}
    <p>Brak faktur do wyświetlenia.</p>
  {/if}

  <a href="{base}/invoices/new" class="fixed btn btn-secondary btn-xl rounded-2xl bottom-5 right-5">
    <img src="{base}/icons/document-add.svg" alt="Dodaj" class="w-7">
  </a>
</div>
