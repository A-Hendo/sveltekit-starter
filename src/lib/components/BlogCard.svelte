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
    class="card bg-initial card-hover overflow-hidden rounded-lg"
    href={`/blog/${slug}`}
>
    <header class="flex justify-center">
        <img src={image} alt={`${title} blog`} />
    </header>
    <div class="p-4 space-y-4">
        <h3 class="h3" data-toc-ignore>{title}</h3>
        <article>
            <p class="my-4 text-gray-400">
                {description}
            </p>
        </article>
    </div>
    <hr class="opacity-50" />
    <footer class="px-4 flex justify-start items-center">
        <div class="flex-auto flex justify-between items-center">
            <h6 class="h6" data-toc-ignore>{author}</h6>
            <h6 class="h6">
                {new Date(date).toLocaleDateString(undefined, options)}
            </h6>
        </div>
    </footer>
</a>
