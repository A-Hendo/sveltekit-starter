<script lang="ts">
    import { page } from "$app/stores";
    import Footer from "$lib/blocks/Footer.svelte";
    import LoginModal from "$lib/blocks/LoginModal.svelte";
    import Navigation from "$lib/blocks/Navigation.svelte";
    import {
        arrow,
        autoUpdate,
        computePosition,
        flip,
        offset,
        shift,
    } from "@floating-ui/dom";
    import {
        Modal,
        initializeStores,
        storePopup,
        type ModalComponent,
    } from "@skeletonlabs/skeleton";

    import "../app.pcss";

    initializeStores();
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

    const modalRegistry: Record<string, ModalComponent> = {
        loginModal: { ref: LoginModal },
    };
</script>

<svelte:head>
    <title>{$page.data.seo.title}</title>
    <meta name="description" content={$page.data.seo.description} />
    <link
        rel="canonical"
        href={`https://www.example.com/${$page.data.seo.canonicalPage}`}
    />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content={$page.data.seo.keywords} />
</svelte:head>

<Modal components={modalRegistry} />

<Navigation />
<slot></slot>
<Footer />
