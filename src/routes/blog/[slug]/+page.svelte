<script lang="ts">
    import { ArrowLeft } from "lucide-svelte";

    export let data;

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
</script>

<div class="bg-surface-100-800-token min-h-dvh">
    <div class="mx-auto max-w-[750px] px-3 sm:px-5 lg:px-6 py-8">
        <div class="pb-10">
            <a href="/blog" class="btn font-semibold btn-link">
                <ArrowLeft size="16" class="mr-1" />
                Back</a
            >
        </div>
        <div class="m-6 leading-6">
            <article>
                <img
                    class="w-full"
                    alt={`${data.blog.title} cover`}
                    src={data.blog.image}
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
                    <svelte:component this={data.blog.content} />
                </div>
            </article>
        </div>
    </div>
</div>
