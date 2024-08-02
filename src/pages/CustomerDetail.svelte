<script lang="ts">
    import { push, segments, urls } from './pathAndSegment';
    import { _ } from 'svelte-i18n';
    import Page from '../Page.svelte';
    import CustomerDetail from '../components/customer-detail/CustomerDetail.svelte';
    import {CustomerById} from "../lib/graphql/generated";

    export let params: any = {};
    const id = parseInt('' + params.id);

    $: customer = CustomerById({variables: { id }})

    // const editCustomer = () => push(urls.customers.edit, id);
</script>

<Page
    segment={segments.customers}
    name="page.customer.detail"
    title={$_('page.customers.detail.title')}
>
    <span slot="content">
        {#if $customer}
            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {$_('page.customers.detail.info')}
                    </h3>
                </div>
                <CustomerDetail customer={$customer.data.customer} />
            </div>
        {:else}
            {$_('status.loading')}
        {/if}
    </span>
</Page>
