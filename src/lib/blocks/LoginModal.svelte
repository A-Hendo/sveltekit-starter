<script lang="ts">
    import LoadingButton from "$lib/components/LoadingButton.svelte";
    import { signIn } from "@auth/sveltekit/client";
    import { SignIn } from "@auth/sveltekit/components";
    import { type ModalSettings } from "@skeletonlabs/skeleton";
    import { SendHorizontal } from "lucide-svelte";
    import type { SvelteComponent } from "svelte";
    import { serverAuthentication } from "../../supakit.config";

    export let parent: SvelteComponent;

    let isLoading = false;

    export const registerModal: ModalSettings = {
        type: "component",
        component: "registerModal",
    };
</script>

<div class="relative card p-4 w-modal-slim shadow-xl space-y-4">
    <button
        class="btn-icon bg-transparent absolute -top-1 -right-1 z-1 focus:outline-0"
        on:click={parent.onClose}>✕</button
    >
    <header class="text-2xl font-bold text-center align-center justify-center">
        Log in to NAME
    </header>
    <SignIn class="resend-signin" provider="resend" signInPage="signin">
        <LoadingButton
            text="Log in"
            slot="submitButton"
            icon={SendHorizontal}
            {isLoading}
            class="btn variant-filled-primary order-last m-1"
        />
    </SignIn>
    <hr class="opacity-50" />
    {#if serverAuthentication}
        <SignIn
            class="w-100 flex flex-col justify-center items-center google-signin"
            provider="google"
            signInPage="signin"
        >
            <button
                slot="submitButton"
                class="btn variant-filled-primary w-full"
                >Login with Google</button
            >
        </SignIn>
    {:else}
        <button on:click={signIn} class="btn variant-filled-primary w-full"
            >Login with Google</button
        >
    {/if}
</div>
