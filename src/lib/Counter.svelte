<script lang="ts">
  import {_} from "svelte-i18n";

  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  {$_('temp.count')} {count}
</button>
