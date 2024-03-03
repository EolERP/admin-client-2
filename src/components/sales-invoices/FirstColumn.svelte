<script lang="ts">
    import type { SalesInvoiceRow } from '../../lib/model/salesInvoice';
    import {_} from "svelte-i18n";
    import {DuplicateSalesInvoice} from "../../lib/graphql/generated";

    export let row: SalesInvoiceRow;

    const download = (id: number) =>
        process.env.API_BASE_URL &&
        (window as any).token /* &&
        salesInvoiceService.downloadInvoice(
            process.env.API_BASE_URL,
            (window as any).token || '',
            id,
        )*/;

    const duplicate = async (id: number) => {
        await DuplicateSalesInvoice({variables: { id }});
    };
</script>

<div class="flex items-center">
    <div class="ml-4">
        <div class="text-sm font-medium text-gray-900">
            <a
                on:click={() => download(row.id)}
                class="font-medium text-indigo-600 hover:text-indigo-500"
            >
                {row.documentNo}
            </a>
        </div>
        <div class="text-sm text-gray-500">
            {row.grandTotalAccountingSchemeCurrency}
        </div>
        <a
                on:click={() => duplicate(row.id)}
                href="#"
                class="text-blue-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >{$_('page.salesInvoices.duplicate.title')}</a>
    </div>
</div>
