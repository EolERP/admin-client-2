<script lang="ts">
    import AddOrEditTax from '../components/add-tax/AddOrEditTax.svelte';
    import { segments } from './pathAndSegment';
    import Page from '../Page.svelte';
    import { _ } from 'svelte-i18n';
</script>

<Page
    title={$_('page.taxes.add.title')}
    segment={segments.taxes}
    name="page.taxes.add.title"
>
    <span slot="content">
        <AddOrEditTax tax={undefined} />
    </span>
</Page>
