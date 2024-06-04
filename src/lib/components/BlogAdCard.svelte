<script lang="ts">
    export let title;
    export let image;
    export let description;
    export let slug;
</script>

<a
    class="bg-initial card-hover overflow-hidden rounded-lg w-[200px] text-sm overflow-ellipsis hover:card hover:variant-soft"
    href={`/blog/${slug}`}
>
    <div class="p-4 space-y-4">
        <img src={image} alt={`${title} blog`} />
        <article>
            <h5 class="h5 font-medium" data-toc-ignore>{title}</h5>
            <p class="text-gray-400 overflow-ellipsis">
                {description}
            </p>
        </article>
    </div>
</a>
