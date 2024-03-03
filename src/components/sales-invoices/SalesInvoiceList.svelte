<script lang="ts">
    import DataGrid from '../../molecules/datagrid/Datagrid.svelte';
    import FirstColumn from './FirstColumn.svelte';
    import { _ } from 'svelte-i18n';
    import type { SalesInvoiceRow } from '../../lib/model/salesInvoice';
    import type {RowAction} from "../../molecules/datagrid/types";

    export let salesInvoices: SalesInvoiceRow[] | undefined;

    const columns = [
        {
            name: $_('page.salesInvoices.list.column1.title'),
            cellComponent: FirstColumn,
        },
    ];

    const rowActions: RowAction[] = [
        {
            name: $_('actions.edit'),
            url: 'sales-invoice/',
        },
        {
            name: $_('actions.detail'),
            url: 'sales-invoice-detail/',
        },
    ];
</script>

<DataGrid rows={salesInvoices} {columns} {rowActions} />
