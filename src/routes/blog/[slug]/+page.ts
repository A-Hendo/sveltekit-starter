import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, params }) => {
    const post = await import(`../${params.slug}.md`);
    const { title, date, author, description, keywords, image, publish } = post.metadata;
    const content = post.default;

    const response = await fetch("http://localhost:5173/api/blogs");
    const blogs = await response.json();

    return {
        seo: {
            title: title,
            description: description,
            canonicalPage: `blog/${params.slug}`,
            keywords: keywords,
            image: image,
        },
        session: data?.session,
        blog: {
            content, title, author, date, description, image
        },
        blogs,
    };
};