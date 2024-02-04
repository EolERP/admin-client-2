<script lang="ts">
    import {taxesStore} from "../../lib/core/tax";
    import {Taxes} from "../../lib/graphql/generated";

    $: taxes = $taxesStore ? null : Taxes({})

    $: {
        if ($taxes && $taxes.data.taxes) {
            $taxesStore = $taxes.data.taxes;
        }
    }
</script>
