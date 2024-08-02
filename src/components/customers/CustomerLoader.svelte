<script lang="ts">
    import {customersStore} from "../../lib/core/customer";
    import {Customers} from "../../lib/graphql/generated";

    $: customers = $customersStore ? null : Customers({})

    $: {
        if ($customers && $customers.data.customers) {
            $customersStore = $customers.data.customers;
        }
    }
</script>
