import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ data }) => {
    const response = await fetch("http://localhost:5173/api/blogs");
    const blogs = await response.json();

    return {
        seo: {
            title: "",
            description: "",
            canonicalPage: `blogs`,
            keywords: "",
            image: "",
        },
        session: data?.session,
        blogs,
    };
};