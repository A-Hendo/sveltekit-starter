import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    const response = await fetch("http://localhost:5173/api/blogs");
    const blogs = await response.json();
    return { blogs }
}