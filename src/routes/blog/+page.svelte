<script lang="ts">
    import BlogCard from "$lib/components/BlogCard.svelte";

    export let data;
</script>

<div class="min-h-screen max-w-6xl mx-auto p-8">
    <div class="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
        {#each data.blogs as blog}
            <BlogCard
                title={blog.metadata.title}
                description={blog.metadata.description}
                image={blog.metadata.image}
                date={blog.metadata.date}
                author={blog.metadata.author}
                slug={blog.slug}
            />
        {/each}
    </div>
</div>
