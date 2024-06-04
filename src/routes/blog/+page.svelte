<script lang="ts">
    import BlogCard from "$lib/components/BlogCard.svelte";
    import FullBlogCard from "$lib/components/FullBlogCard.svelte";

    export let data;
</script>

<div class="min-h-screen max-w-6xl mx-auto p-8">
    <div class="my-4">
        <h1 class="h1">Blog Articles</h1>
    </div>
    <div class="my-4 mb-16">
    <h5 class="h5">
        Keep up with the latest news, tutorials, and releases.
    </h5>
    </div>
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
    <div class="grid mb-24 md:mb-32 gap-8">
        {#each data.blogs as blog}
            <FullBlogCard
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
