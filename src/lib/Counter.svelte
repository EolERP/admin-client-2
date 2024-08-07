<script lang="ts">
  import {SalesInvoices} from "./graphql/generated";
  $: invoices = SalesInvoices({})
</script>

{#if !$invoices}
  <p>.. loading</p>
{:else}
  {#each $invoices?.data?.salesInvoices ?? [] as salesInvoice}
    <p>{salesInvoice.id}</p>
  {/each}
{/if}