<script lang="ts">
    import LoadingButton from "$lib/components/LoadingButton.svelte";

    import { SignIn } from "@auth/sveltekit/components";
    import { type ModalSettings } from "@skeletonlabs/skeleton";
    import { SendHorizontal } from "lucide-svelte";
    import type { SvelteComponent } from "svelte";

    export let parent: SvelteComponent;

    let isLoading = false;
    let email = "";

    export const registerModal: ModalSettings = {
        type: "component",
        component: "registerModal",
    };
    function signIn() {
        // Magic link
    }
</script>

<div class="relative card p-4 w-modal-slim shadow-xl space-y-4">
    <button
        class="btn-icon bg-transparent absolute -top-1 -right-1 z-1 focus:outline-0"
        on:click={parent.onClose}>✕</button
    >
    <header class="text-2xl font-bold text-center align-center justify-center">
        Log in to NAME
    </header>
    <!-- make submit not signIn as this uses oauth and not magic links -->
    <form on:submit={signIn} class="p-4 space-y-4 rounded-container-token">
        <div class="py-2" />
        <label class="label">
            <span class="font-bold">Email</span>
            <input class="input p-1" type="email" bind:value={email} required />
        </label>
        <footer class="pt-5 modal-footer {parent.regionFooter} flex flex-col">
            <div class="flex flex-col w-full my-1">
                <LoadingButton
                    text="Log in"
                    icon={SendHorizontal}
                    {isLoading}
                    class="btn variant-filled-primary order-last m-1 w-full"
                />
            </div>
        </footer>
    </form>
    <hr class="opacity-50" />
    <SignIn
        class="w-100 flex flex-col justify-center items-center"
        provider="google"
        signInPage="signin"
    >
        <button slot="submitButton" class="btn variant-filled-primary w-full"
            >Login with Google</button
        >
    </SignIn>
</div>
