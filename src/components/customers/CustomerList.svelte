<script lang="ts">
    import DataGrid from '../../molecules/datagrid/Datagrid.svelte';
    import FirstColumn from './FirstColumn.svelte';
    import { _ } from 'svelte-i18n';
    import type { CustomerRow } from '../../lib/model/customer';
    import type {RowAction} from "../../molecules/datagrid/types";

    export let customers: CustomerRow[] | undefined;

    const columns = [
        {
            name: $_('page.countries.list.column1.title'),
            cellComponent: FirstColumn,
        },
    ];

    const rowActions: RowAction[] = [
        {
            name: $_('actions.edit'),
            url: 'customer/',
        },
        {
            name: $_('actions.detail'),
            url: 'customer-detail/',
        },
    ];
</script>

<DataGrid rows={customers} {columns} {rowActions} />
