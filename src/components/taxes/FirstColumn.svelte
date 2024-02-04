<script lang="ts">


    import type {TaxRow} from "../../lib/model/tax";

    export let row: TaxRow;
</script>

<div class="flex items-center">
    <div class="ml-4">
        <div class="text-sm font-medium text-gray-900">
            {row.ratePercent}
        </div>
        <div class="text-sm text-gray-500">
            {row.isStandard}
        </div>
    </div>
</div>
