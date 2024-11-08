/* Required for every page  */

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
    return {
        seo: {
            title: "",
            description: "",
            canonicalPage: "",
            keywords: "",
        },
        clientSecret: data.clientSecret,
        session: data?.session,
    };
};