<script lang="ts">
    import {setContext} from "svelte";
    import client from "./apollo-client";

    setContext(Symbol('client'), client)
</script>
<slot />
