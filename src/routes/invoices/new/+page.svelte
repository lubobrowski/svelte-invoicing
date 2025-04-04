<script lang="ts">
  import DecimalInput from '$lib/components/DecimalInput.svelte'
  import { loadTemplates } from '$lib/data'
  import type { TemplateListDto } from '$lib/models/types'
  import { onMount } from 'svelte'

  let loading: boolean = true
  let templates: TemplateListDto[] = []
  let hoursWorked: number = 100

  onMount(() => {
    async function loadData() {
      templates = await loadTemplates(0, 1000)
      loading = false
    }
    loadData()
  })
</script>

<div class="grid grid-cols-1 place-items-center">
  <h2 class="text-xl font-bold">Nowa faktura</h2>

  <fieldset class="fieldset bg-base-200 border-base-300 rounded-box mx-4 border p-4">
    <legend class="fieldset-legend">Dane do faktury</legend>

    <label for="TemplateSelect" class="fieldset-label">Kontrahent</label>
    <select id="TemplateSelect" class="select">
      {#if loading}
        <option disabled selected>Wczytuję...</option>
      {:else}
        <option disabled selected>Wybierz szablon</option>
        {#each templates as template}
          <option>{template.customerData}</option>
        {/each}
      {/if}
    </select>

    <label for="HoursWorkedInput" class="fieldset-label">Godzin</label>
    <DecimalInput bind:value={hoursWorked} min={10} max={400} class="input" />

    <label for="HourlyRateInput">Stawka PLN/h</label>
    <input
      id="HourlyRateInput"
      type="number"
      class="input validator"
      required
      placeholder="Stawka PLN / h ..."
      min="0.01"
      max="400"
      step="0.01"
    />
  </fieldset>
  <span>{hoursWorked}</span>
</div>
