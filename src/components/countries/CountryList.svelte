<script lang="ts">
    import DataGrid from '../../molecules/datagrid/Datagrid.svelte';
    import FirstColumn from './FirstColumn.svelte';
    import { _ } from 'svelte-i18n';
    import type { CountryRow } from '../../lib/model/country';
    import type {RowAction} from "../../molecules/datagrid/types";

    export let countries: CountryRow[] | undefined;

    const columns = [
        {
            name: $_('page.countries.list.column1.title'),
            cellComponent: FirstColumn,
        },
    ];

    const rowActions: RowAction[] = [
        {
            name: $_('actions.edit'),
            url: 'country/',
        },
        {
            name: $_('actions.detail'),
            url: 'country-detail/',
        },
    ];
</script>

<DataGrid rows={countries} {columns} {rowActions} />
