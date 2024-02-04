<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { push, urls } from '../../pages/pathAndSegment';
    import type { TaxDetail } from '../../lib/model/tax';
    import {SaveTax} from "../../lib/graphql/generated";

    export let tax: TaxDetail | undefined;
    let { id, isStandard, ratePercent, displayName } = tax || {};

    const saveTax = async () => {
        console.log({ id, isStandard, ratePercent, displayName });
        if (ratePercent && displayName) {
            ratePercent = Number(ratePercent)
            isStandard = !!isStandard

            const { data } = await SaveTax({variables: { id, isStandard, ratePercent, displayName }})
            if (data && data.saveTax) await push(urls.taxes.detail, data.saveTax.id);
        }
    };
</script>

<form on:submit|preventDefault={saveTax}>
<div class="mt-10 sm:mt-0">
    <div class="md:gap-6">
        <div class="mt-5 md:mt-0">
            <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                    <input id="displayName" placeholder={$_('page.taxes.add.displayName')} bind:value={displayName} />
                    <input id="ratePercent" placeholder={$_('page.taxes.add.ratePercent')} bind:value={ratePercent} />
                    <input id="isStandard" type="checkbox" placeholder={$_('page.taxes.add.isStandard')} bind:checked={isStandard} />

                    <div class="px-4 py-3 bg-white text-right sm:px-6">
                        <button type="submit">Save tax</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</form>