<script lang="ts">
    import TaxList from '../components/taxes/TaxList.svelte';
    import { segments, urls } from './pathAndSegment';
    import { _ } from 'svelte-i18n';
    import Page from '../Page.svelte';
    import {taxesStore} from "../lib/core/tax";
    import TaxLoader from "../components/taxes/TaxesLoader.svelte";
</script>

<TaxLoader />
<Page title={$_('page.taxes.title')} segment={segments.taxes} name="page.taxes">
    <span slot="content">
        {#if $taxesStore}
            <TaxList taxes={$taxesStore} />
        {:else}
            {$_('status.loading')}
        {/if}
    </span>
    <span slot="header">
        <a
                href="#/{urls.taxes.add}"
                class="text-blue-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >{$_('page.taxes.add.title')}</a
        >
    </span>
</Page>
