<script lang="ts">
    import BlogAdCard from "$lib/components/BlogAdCard.svelte";
    import { ArrowLeft } from "lucide-svelte";

    export let data;

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
</script>

<div class="bg-surface-100-800-token min-h-dvh">
    <div class="mx-auto max-w-[1000px] px-3 sm:px-5 lg:px-6 py-8">
        <div class="pb-10">
            <a href="/blog" class="btn font-semibold btn-link">
                <ArrowLeft size="16" class="mr-1" />
                Back</a
            >
        </div>
        <div class="flex flex-col md:flex-row">
            <div class="m-6 leading-6">
                <article>
                    <img
                        class="w-full"
                        alt="{`${data.blog.title} cover`}"
                        src="{data.blog.image}"
                    />
                    <div class="flex justify-between">
                        <div>
                            <span class="text-gray-500">Posted by</span>
                            <span class="text-lg font-semibold"
                                >{data.blog.author}</span
                            >
                        </div>
                        <div class="">
                            {new Date(data.blog.date).toLocaleDateString(
                                undefined,
                                options,
                            )}
                        </div>
                    </div>
                    <h1 class="text-4xl font-bold mb-4 mt-12">
                        {data.blog.title}
                    </h1>
                    <div class="mb-10">{data.blog.description}</div>
                    <div class="my-4 article-content leading-relaxed">
                        <svelte:component this="{data.blog.content}" />
                    </div>
                </article>
            </div>
            <div
                class="block mt-6 max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-64 shrink-0"
            >
                {#each data.blogs as blog}
                    <BlogAdCard
                        title="{blog.metadata.title}"
                        image="{blog.metadata.image}"
                        description="{blog.metadata.description}"
                        slug="{blog.metadata.slug}"
                    />
                {/each}
            </div>
        </div>
    </div>
</div>
