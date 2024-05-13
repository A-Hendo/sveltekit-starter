<script lang="ts">
    import { Check, SendHorizonal } from "lucide-svelte";
    let yearly: boolean = false;
</script>

<div
    id="pricing"
    class="mx-auto px-3 py-24 flex flex-col justify-center items-center"
>
    <div class="container">
        <div class="text-center">
            <h2 class="text-3xl font-bold my-10">Pricing</h2>
        </div>
        <div
            class="mx-auto my-16 flex flex-col justify-center items-center gap-5 lg:items-stretch lg:flex-row"
        >
            <div
                class="card p-4 mx-5 flex flex-col bg-white shadow-sm gap-5 lg:gap-8 w-full"
            >
                <div class="card-header text-center">
                    {#if yearly}
                        <div class="mb-4">
                            <h1 class="h3">FREE</h1>
                        </div>
                        <div class="h2">
                            <span>£0</span>
                        </div>
                        <span class="text-sm text-gray-400">per year</span>
                    {:else}
                        <div class="mb-4">
                            <h1 class="h3">FREE</h1>
                        </div>
                        <div class="h2">
                            <span>£0</span>
                        </div>
                        <span class="text-sm text-gray-400">per month</span>
                    {/if}
                </div>
                <section class="">
                    <ul>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> 1 Team Member
                        </li>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> 1 Website
                        </li>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> 1GB Storage
                        </li>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> Email Support
                        </li>
                    </ul>
                </section>
                <div class="card-footer">
                    {#if yearly}
                        <a
                            class="btn justify-center w-full variant-filled-primary"
                            href="/"
                        >
                            Try now!<SendHorizonal size="18" class="ml-2" />
                        </a>
                    {:else}
                        <a
                            class="btn justify-center w-full variant-filled-primary"
                            href="/product"
                        >
                            Try now!<SendHorizonal size="18" class="ml-2" />
                        </a>
                    {/if}
                </div>
            </div>
            <div
                class="relative card p-4 mx-5 flex flex-col bg-white shadow-sm gap-5 lg:gap-8 w-full border-2 border-primary-500"
            >
                <div
                    class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                    <span
                        class="badge variant-filled-primary text-xs font-semibold"
                    >
                        POPULAR
                    </span>
                </div>
                <div class="card-header text-center">
                    {#if yearly}
                        <div class="mb-4">
                            <h1 class="h3">PRO</h1>
                        </div>
                        <div class="h2">
                            <span>£48</span>
                        </div>
                        <span class="text-sm text-gray-400">per year</span>
                    {:else}
                        <div class="mb-4">
                            <h1 class="h3">PRO</h1>
                        </div>
                        <div class="h2">
                            <span>£5</span>
                        </div>
                        <span class="text-sm text-gray-400">per month</span>
                    {/if}
                </div>
                <section class="">
                    <ul>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> 10 Team Member
                        </li>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> 10 Website
                        </li>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> 10GB Storage
                        </li>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> Email Support
                        </li>
                    </ul>
                </section>
                <div class="card-footer">
                    {#if yearly}
                        <a
                            class="btn justify-center w-full variant-filled-primary"
                            href="/"
                        >
                            Try now!<SendHorizonal size="18" class="ml-2" />
                        </a>
                    {:else}
                        <a
                            class="btn justify-center w-full variant-filled-primary"
                            href="/"
                        >
                            Try now!<SendHorizonal size="18" class="ml-2" />
                        </a>
                    {/if}
                </div>
            </div>
            <div
                class="card p-4 mx-5 flex flex-col bg-white shadow-sm gap-5 lg:gap-8 w-full"
            >
                <div class="card-header text-center">
                    {#if yearly}
                        <div class="mb-4">
                            <h1 class="h3">ENTERPRISE</h1>
                        </div>
                        <div class="h2">
                            <span>£72</span>
                        </div>
                        <span class="text-sm text-gray-400"
                            >per seat / year</span
                        >
                    {:else}
                        <div class="mb-4">
                            <h1 class="h3">ENTERPRISE</h1>
                        </div>
                        <div class="h2">
                            <span>£8</span>
                        </div>
                        <span class="text-sm text-gray-400"
                            >per seat / month</span
                        >
                    {/if}
                </div>
                <section class="">
                    <ul>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> 50 Team Member
                        </li>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> 10 Website
                        </li>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> 50 GB Storage
                        </li>
                        <li class="my-3">
                            <Check
                                size="18"
                                class="inline-block mr-2 text-primary-600"
                            /> Email Support
                        </li>
                    </ul>
                </section>
                <div class="card-footer">
                    {#if yearly}
                        <a
                            class="btn justify-center w-full variant-filled-primary"
                            href="/"
                        >
                            Try now!<SendHorizonal size="18" class="ml-2" />
                        </a>
                    {:else}
                        <a
                            class="btn justify-center w-full variant-filled-primary"
                            href="/"
                        >
                            Try now!<SendHorizonal size="18" class="ml-2" />
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
