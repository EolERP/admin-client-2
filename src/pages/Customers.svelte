<script lang="ts">
    import CustomerList from '../components/customers/CustomerList.svelte';
    import { segments, urls } from './pathAndSegment';
    import { _ } from 'svelte-i18n';
    import Page from '../Page.svelte';
    import {customersStore} from "../lib/core/customer";
    import CustomerLoader from "../components/customers/CustomerLoader.svelte";
</script>

<CustomerLoader />
<Page title={$_('page.customers.title')} segment={segments.customers} name="page.customers">
    <span slot="content">
        {#if $customersStore}
            <CustomerList customers={$customersStore} />
        {:else}
            {$_('status.loading')}
        {/if}
    </span>
    <span slot="header">
        <a
                href="#/{urls.customer.add}"
                class="text-blue-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >{$_('page.customers.add.title')}</a
        >
    </span>
</Page>
