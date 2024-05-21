import type { blogMetadata } from '$lib/types';
import { json } from '@sveltejs/kit';


export const GET = async ({ url }) => {
    let blogs = []

    const paths = import.meta.glob('/src/routes/blog/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (path && slug) {
            const metadata: blogMetadata = file.metadata;
            if (metadata?.publish)
                blogs.push({ metadata, slug })
        }
    }

    blogs = blogs.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return json(blogs)
};