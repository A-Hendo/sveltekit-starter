<script lang="ts">
    import type { Icon } from "lucide-svelte";
    import { LoaderCircle } from "lucide-svelte";
    import type { ComponentType } from "svelte";

    export let icon: ComponentType<Icon>;
    export let text: string;
    export let isLoading = false;
</script>

<button disabled="{isLoading}" class="{$$props.class}" type="submit"
    >{text}
    {#if isLoading}
        <LoaderCircle size="16" class="ml-1 animate-spin" />
    {:else if icon}
        <svelte:component this="{icon}" size="16" class="ml-1" />
    {/if}
</button>
