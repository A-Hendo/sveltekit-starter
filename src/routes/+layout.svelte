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
        autoModeWatcher,
        initializeStores,
        storePopup,
        type ModalComponent,
    } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";

    import "../app.pcss";
    import { serverSideRendering } from "../supakit.config";

    initializeStores();
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

    const modalRegistry: Record<string, ModalComponent> = {
        loginModal: { ref: LoginModal },
    };

    if (!serverSideRendering) {
        onMount(() => {
            autoModeWatcher();
        });
    }
</script>

<svelte:head>
    <title>{$page.data.seo.title}</title>
    <meta name="description" content={$page.data.seo.description} />
    <link
        rel="canonical"
        href={`www.example.com${$page.data.seo.canonicalPage}`}
    />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content={$page.data.seo.keywords} />
    <meta
        property="og:image"
        content={$page.data.seo.image ? $page.data.seo.image : ""}
    />
    <meta
        property="og:url"
        content={`www.example.com${$page.data.seo.canonicalPage}`}
    />
    <meta property="og:title" content={$page.data.seo.title} />
    <meta property="og:description" content={$page.data.seo.description} />

    <!-- {@html "<script>(" + autoModeWatcher.toString() + ")();</script>"} -->
</svelte:head>

<Modal components={modalRegistry} />

<Navigation />
<slot></slot>
<Footer />
