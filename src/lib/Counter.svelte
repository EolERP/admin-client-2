<script lang="ts">
  import {_} from "svelte-i18n";
  import {SalesInvoices} from "./graphql/generated";
  $: invoices = SalesInvoices({})

  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  {$_('temp.count')} {count}
</button>

{#if !$invoices}
  <p>.. loading</p>
{:else}
  {#each $invoices?.data?.salesInvoices ?? [] as salesInvoice}
    <p>{salesInvoice.id}</p>
  {/each}
{/if}