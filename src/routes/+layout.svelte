<script lang="ts">
    import Footer from "$lib/blocks/Footer.svelte";
    import LoginModal from "$lib/blocks/LoginModal.svelte";
    import Navigation from "$lib/blocks/Navigation.svelte";
    import PasswordModal from "$lib/blocks/PasswordModal.svelte";
    import SignUpModal from "$lib/blocks/SignUpModal.svelte";
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
        registerModal: { ref: SignUpModal },
        passwordModal: { ref: PasswordModal },
    };
</script>

<Modal components={modalRegistry} />

<Navigation />
<slot></slot>
<Footer />
