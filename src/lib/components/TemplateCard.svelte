<script lang="ts">
    const buyer = `SZPITAL SPECJALISTYCZNY IM. ŚWIĘTEJ RODZINY				
SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ`;
    const description = `Usługi pielęgniarskie na podstawie umowy 351/2024`;
</script>

<div class="card card-sm my-2 bg-base-50 shadow-sm">
    <div class="card-body">
        <div class="grid grid-cols-2">
            <p class="mt-2 text-sm">{buyer}</p>
            <p class="mt-2 text-sm">{description}</p>    
        </div>
        <div class="card-actions">
            <button class="btn btn-sm btn-square">
                <img src="/icons/compose.svg" alt="Edytuj" class="w-5">
            </button>
            <button class="btn btn-sm btn-square">
                <img src="/icons/trash.svg" alt="Edytuj" class="w-5">
            </button>
            <button class="btn btn-sm btn-secondary ml-auto">Wystaw fakturę</button>
        </div>
    </div>
</div>
