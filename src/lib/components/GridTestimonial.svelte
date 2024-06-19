<script lang="ts">
    import { Avatar, Ratings } from "@skeletonlabs/skeleton";
    import { Star, StarHalf } from "lucide-svelte";

    export let name: string;
    export let image: string;
    export let text: string;
    export let rating: number = -1;

    const maxStars: number = 5;
</script>

<div class="w-full mx-auto rounded-md bg-white border border-gray-200 p-5 mb-6">
    <div class="w-full flex mb-4 items-center">
        <Avatar src="{`${image}`}" alt="{`${name} avatar`}" width="w-10" />
        <div class="flex-grow pl-3">
            <h6 class="font-bold text-sm uppercase text-gray-600">
                {name}
            </h6>
            {#if rating >= 0}
                <div class="flex float-start">
                    <Ratings value="{rating}" max="{maxStars}">
                        <svelte:fragment slot="empty"
                            ><Star
                                size="16"
                                class="text-primary-500"
                            /></svelte:fragment
                        >
                        <svelte:fragment slot="half"
                            ><StarHalf
                                size="16"
                                class="star-fill text-primary-500"
                            /></svelte:fragment
                        >
                        <svelte:fragment slot="full"
                            ><Star
                                size="16"
                                class="star-fill text-primary-500"
                            /></svelte:fragment
                        >
                    </Ratings>
                </div>
            {/if}
        </div>
    </div>
    <div class="w-full">
        <p class="text-md leading-tight font-thin">
            {text}
        </p>
    </div>
</div>
