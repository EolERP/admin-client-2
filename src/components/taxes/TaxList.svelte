<script lang="ts">
    import DataGrid from '../../molecules/datagrid/Datagrid.svelte';
    import FirstColumn from './FirstColumn.svelte';
    import { _ } from 'svelte-i18n';
    import type { TaxRow } from '../../lib/model/tax';
    import type {RowAction} from "../../molecules/datagrid/types";

    export let taxes: TaxRow[] | undefined;

    const columns = [
        {
            name: $_('page.taxes.list.column1.title'),
            cellComponent: FirstColumn,
        },
    ];

    const rowActions: RowAction[] = [
        {
            name: $_('actions.edit'),
            url: 'tax/',
        },
        {
            name: $_('actions.detail'),
            url: 'tax-detail/',
        },
    ];
</script>

<DataGrid rows={taxes} {columns} {rowActions} />
