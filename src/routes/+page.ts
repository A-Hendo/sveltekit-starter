/* Required for every page  */

import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    return {
        seo: {
            title: "",
            description: "",
            canonicalPage: "",
            keywords: "",
        },
    };
};