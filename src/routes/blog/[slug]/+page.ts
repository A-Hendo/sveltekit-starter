import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, params }) => {
    const post = await import(`../${params.slug}.md`);
    const { title, date, author, description, keywords, image, publish } = post.metadata;
    const content = post.default;

    const response = await fetch("http://localhost:5173/api/blogs");
    let blogs = await response.json();
    const blogAds = [];

    blogs = blogs.filter(blog => blog.metadata.slug !== params.slug);

    const firstBlog = Math.floor(Math.random() * blogs.length);
    blogAds.push(blogs[firstBlog]);
    blogs.splice(blogs.indexOf(firstBlog), 1);

    const secondBlog = Math.floor(Math.random() * blogs.length);
    blogAds.push(blogs[secondBlog]);
    blogs.splice(blogs.indexOf(secondBlog), 1);

    if (!publish)
        redirect(307, "/blog")

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
        blogs: blogAds,
    };
};