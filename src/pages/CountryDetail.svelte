<script lang="ts">
    import { push, segments, urls } from './pathAndSegment';
    import { _ } from 'svelte-i18n';
    import Page from '../Page.svelte';
    import CountryDetail from '../components/country-detail/CountryDetail.svelte';
    import {countryById} from "../lib/graphql/generated";

    export let params: any = {};
    const id = parseInt('' + params.id);

    $: country = countryById({variables: { id }})

    const editCountry = () => push(urls.countries.edit, id);
</script>

<Page
    segment={segments.countries}
    name="page.country.detail"
    title={$_('page.countries.detail.title')}
>
    <span slot="content">
        {#if $country}
            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {$_('page.countries.detail.info')}
                    </h3>
                </div>
                <CountryDetail data={$country.data.country} />
            </div>
        {:else}
            {$_('status.loading')}
        {/if}
    </span>
</Page>
