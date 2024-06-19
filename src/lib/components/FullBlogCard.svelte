<script lang="ts">
    export let title;
    export let author;
    export let date;
    export let image;
    export let description;
    export let slug;

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
</script>

<a
    class="block bg-initial hover:card hover:variant-soft overflow-hidden rounded-lg"
    href="{`/blog/${slug}`}"
>
    <div class="p-4 space-y-4">
        <article
            class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-8"
        >
            <img
                class="bg-black/50 w-full lg:max-w-sm aspect-video rounded-container-token bg-cover bg-center"
                src="{image}"
                alt="{`${title} blog`}"
            />
            <div>
                <h2 class="h2 font-bold" data-toc-ignore>{title}</h2>
                <p class="my-4 text-gray-400">
                    {description}
                </p>
                <div class="flex-auto flex justify-between items-center my-4">
                    <h6 class="h6" data-toc-ignore>{author}</h6>
                    <h6 class="h6">
                        {new Date(date).toLocaleDateString(undefined, options)}
                    </h6>
                </div>
            </div>
        </article>
    </div>
</a>
