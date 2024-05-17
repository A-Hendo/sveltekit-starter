<script lang="ts">
    import { PUBLIC_STRIPE_KEY } from "$env/static/public";
    import { loadStripe } from "@stripe/stripe-js";
    import { onMount } from "svelte";
    import { EmbeddedCheckout } from "svelte-stripe";
    import type { PageData } from "./$types";

    export let data: PageData;
    let stripe: any = null;

    onMount(async () => {
        stripe = await loadStripe(PUBLIC_STRIPE_KEY);
    });
</script>

<div class="my-10 max-h-screen">
    <EmbeddedCheckout {stripe} clientSecret={data.clientSecret} />
</div>
