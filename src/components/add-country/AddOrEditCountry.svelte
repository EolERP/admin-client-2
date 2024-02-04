<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { push, urls } from '../../pages/pathAndSegment';
    import type { CountryDetail } from '../../lib/model/country';
    import {SaveCountry} from "../../lib/graphql/generated";

    export let country: CountryDetail | undefined;
    let { id, displayName, isoCode } = country || {};

    const saveCountry = async () => {
        if (displayName && isoCode) {
            const { data } = await SaveCountry({variables: { id, displayName, isoCode }})
            if (data && data.saveCountry) await push(urls.countries.detail, data.saveCountry.id);
        }
    };
</script>

<form on:submit|preventDefault={saveCountry}>
<div class="mt-10 sm:mt-0">
    <div class="md:gap-6">
        <div class="mt-5 md:mt-0">
            <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                    <input id="displayName" placeholder={$_('page.countries.add.displayName')} bind:value={displayName} />
                    <input id="isoCode" placeholder={$_('page.countries.add.isoCode')} bind:value={isoCode} />

                    <div class="px-4 py-3 bg-white text-right sm:px-6">
                        <button type="submit">Save country</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</form>