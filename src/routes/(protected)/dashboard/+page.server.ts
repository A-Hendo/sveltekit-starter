import { fail, redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
    const session = await event.locals.auth()

    if (!session?.user?.email) {
        return fail(401, { type: "error", error: "Unauthenticated" })
    }

    return {
        session,
    }
}