<script lang="ts">
    import { page } from "$app/stores";
    import { SignOut } from "@auth/sveltekit/components";
    import {
        AppBar,
        Avatar,
        LightSwitch,
        getModalStore,
        popup,
        type ModalSettings,
        type PopupSettings,
    } from "@skeletonlabs/skeleton";
    import { LogOut } from "lucide-svelte";

    const modalStore = getModalStore();
    const loginModal: ModalSettings = {
        type: "component",
        component: "loginModal",
    };

    const accountPopup: PopupSettings = {
        event: "click",
        target: "accountPopup",
        placement: "bottom",
        closeQuery: "#sign-out",
    };
</script>

<AppBar
    gridColumns="grid-cols-3"
    slotDefault="place-self-center"
    slotLead="place-content-start"
    slotTrail="place-content-end"
>
    <svelte:fragment slot="lead">
        <div class="flex self-center">
            <!-- <img alt="logo" src="./favicon.png" class="w-5" /> -->
            <h1 class="font-bold">NAME</h1>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="default">
        <nav class="self-center font-bold">
            <a href="/#pricing" class="btn btn-link">Pricing</a>
            <a href="/#faq" class="btn btn-link">FAQ</a>
            <a href="/#about" class="btn btn-link">About</a>
            <a href="/blog" class="btn btn-link">Blog</a>
            <a href="/#contact" class="btn btn-link">Contact</a>
            {#if $page.data.session?.user}
                <a href="/dashboard" class="btn">Dashboard</a>
            {/if}
        </nav>
    </svelte:fragment>

    <svelte:fragment slot="trail">
        {#if $page.data.session?.user}
            <div use:popup={accountPopup}>
                <Avatar
                    border="hover:!ring-primary-500 hover:ring-2"
                    cursor="cursor-pointer"
                    src={$page.data.session?.user?.image}
                    width="w-10"
                    rounded="rounded-full"
                />
            </div>
        {:else}
            <div class="self-center font-bold"></div>
            <div class="float-right content-center">
                <button
                    type="button"
                    class="btn variant-filled-primary"
                    on:click={() => modalStore.trigger(loginModal)}
                    >Login</button
                >
            </div>
        {/if}
    </svelte:fragment>
</AppBar>

<div class="card p-4 w-72 shadow-xl" data-popup="accountPopup">
    <div class="arrow bg-primary-500" />
    <div class="flex flex-col w-full">
        <div class="m-2 flex-row w-full hidden">
            <!-- <LightSwitch class="float-right" /> -->
        </div>
        <div class="flex m-2 items-center">
            <Avatar
                src={$page.data.session?.user?.image}
                width="w-8"
                rounded="rounded-full"
            />
            <span class="mx-4">{$page.data.session?.user?.name}</span>
        </div>
        <div class="flex-grow border-t border-gray-400 my-4"></div>
        <div class="my-2">
            <div>
                <SignOut provider="google" signOutPage="signout">
                    <button
                        slot="submitButton"
                        id="sign-out"
                        type="button"
                        class="btn btn-sm bg-initial hover:variant-glass-surface w-full justify-normal"
                    >
                        <LogOut size="18" class="mr-2" />
                        Log out
                    </button>
                </SignOut>
            </div>
        </div>
    </div>
</div>
