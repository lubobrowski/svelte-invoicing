<script lang="ts">
  import { base } from '$app/paths'
  import type { InvoiceListDto } from '$lib/models/types'
  import { formatAmount } from '$lib/utils'

  let { invoice }: { invoice: InvoiceListDto } = $props()
</script>

<div class="card card-sm bg-base-100 shadow-sm">
  <div class="card-body">
    <div class="grid grid-cols-2">
      <h2 class="card-title text-xl">Nr {invoice.number}</h2>
      <p class="text-right text-lg font-semibold">{invoice.issueDate}</p>
      <p class="mt-2 text-sm">{invoice.customerData}</p>
      <p class="mt-2 text-right text-lg font-bold">{formatAmount(invoice.totalValue)}</p>
    </div>
    <div class="card-actions justify-end">
      <button class="btn btn-sm btn-square">
        <img src="{base}/icons/printer.svg" alt="Drukuj" class="w-5" />
      </button>
      <button class="btn btn-sm btn-square">
        <img src="{base}/icons/view-show.svg" alt="Szczegóły" class="w-5" />
      </button>
    </div>
  </div>
</div>
