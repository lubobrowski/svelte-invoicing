<script lang="ts">
  import { base } from '$app/paths'
    import type { TemplateListDto } from '$lib/models/types'
    import { formatAmount } from '$lib/utils'

  let { template } : { template: TemplateListDto } = $props()
</script>

<div class="card card-sm bg-base-100 shadow-sm">
  <div class="card-body">
    <div class="grid grid-cols-2">
      <p class="mt-2 text-sm">{template.customerData}</p>
      <div>
        <p class="mt-2 text-sm font-semibold">{formatAmount(template.hourlyRate)} / h</p>
      </div>
    </div>
    <div class="card-actions">
      <button class="btn btn-sm btn-square">
        <img src="{base}/icons/compose.svg" alt="Edytuj" class="w-5" />
      </button>
      <button class="btn btn-sm btn-square">
        <img src="{base}/icons/trash.svg" alt="Edytuj" class="w-5" />
      </button>
      <button class="btn btn-md ml-auto">Wystaw fakturę</button>
    </div>
  </div>
</div>
