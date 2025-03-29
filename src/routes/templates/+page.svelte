<script lang="ts">
  import { base } from '$app/paths'
  import TemplateCard from '$lib/components/TemplateCard.svelte'
    import { loadTemplates } from '$lib/data'
    import type { TemplateListDto } from '$lib/models/types'
    import { onMount } from 'svelte'

  let templates: TemplateListDto[] = [];
  let page = 0;
  const perPage = 5;
  let loading = false;
  let allDataLoaded = false;

  async function loadMore() {
    if (loading || allDataLoaded) return;
    loading = true;

    const newTemplates = await loadTemplates(page, perPage);
    if (newTemplates.length === 0) {
      allDataLoaded = true;
    } else {
      templates = [...templates, ...newTemplates];
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
    <h2 class="text-3xl font-semibold">Szablony</h2>
  </div>

  {#each templates as template}
    <TemplateCard template={template} />
  {/each}
  
  {#if loading}
    <p class="loading loading-spinner loading-xl mx-auto mt-4 text-center"></p>
  {/if}
  {#if allDataLoaded && templates.length > 0}
    <p class="text-center">Nie ma więcej do wyświetlenia.</p>
  {/if}
  {#if templates.length === 0}
    <p>Brak szablonów do wyświetlenia.</p>
  {/if}

  <a href="{base}/templates/new" class="fixed btn btn-secondary btn-xl rounded-2xl bottom-5 right-5">
    <img src="{base}/icons/add-outline.svg" alt="Dodaj" class="w-7">
  </a>

</div>
