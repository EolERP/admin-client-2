<script lang="ts">
    import {countriesStore} from "../../lib/core/country";
    import {Countries} from "../../lib/graphql/generated";

    $: countries = $countriesStore ? null : Countries({})

    $: {
        if ($countries && $countries.data.countries) {
            $countriesStore = $countries.data.countries;
        }
    }
</script>
