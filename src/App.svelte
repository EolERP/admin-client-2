<script lang="ts">
  import {tokenStore} from "./keycloak";
  import Wrapper from "./lib/Wrapper.svelte";
  import {routes} from "./routes";
  import Router from 'svelte-spa-router';
  import type {Opt} from "./lib/support/types";
  let token : Opt<string>;

  tokenStore.subscribe((value) => {
    token=value;
  });
</script>

{#if token}
<div class="card">
  <Wrapper>
    <Router {routes} />
  </Wrapper>
</div>
{/if}

