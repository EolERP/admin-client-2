<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { menuStore } from './lib/core/menu';
    import {Menu} from "./lib/graphql/generated";

    export let segment: string;
    export let mobile: boolean | null;

    $: menu = Menu({})

    $: {
        if ($menu && $menu.data.menu) {
            $menuStore = $menu.data.menu[0];
        }
    }
</script>

<div class="ml-10 flex items-baseline space-x-4">
    {#if $menuStore}
        {#each ($menuStore || { items: [] }).items as menuItem}
            <a
                href={`#/${menuItem.to}`}
                data-testid={`menu-${menuItem.id}-${mobile ? 'mobile' : 'desktop'}`}
                class={mobile
                    ? segment === menuItem.to
                        ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    : segment === menuItem.to
                    ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                >{$_(menuItem.displayName)}</a
            >
        {/each}
    {:else}
        Loading menu...
    {/if}
</div>
