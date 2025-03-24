<script lang="ts">
	import { base } from "$app/paths";

    const buyer = `SZPITAL SPECJALISTYCZNY IM. ŚWIĘTEJ RODZINY				
SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ`;
    const description = `Usługi pielęgniarskie na podstawie umowy 351/2024`;
</script>

<div class="card card-sm bg-base-100 shadow-sm">
    <div class="card-body">
        <div class="grid grid-cols-2">
            <p class="mt-2 text-sm">{buyer}</p>
            <div>
                <p class="mt-2 text-sm">{description}</p>    
                <p class="mt-2 text-sm font-semibold">93,00 PLN / h</p>
            </div>
        </div>
        <div class="card-actions">
            <button class="btn btn-sm btn-square">
                <img src="{base}/icons/compose.svg" alt="Edytuj" class="w-5">
            </button>
            <button class="btn btn-sm btn-square">
                <img src="{base}/icons/trash.svg" alt="Edytuj" class="w-5">
            </button>
            <button class="btn btn-md ml-auto">Wystaw fakturę</button>
        </div>
    </div>
</div>
