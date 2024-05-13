import { db } from "$lib/server/db";
import { accounts, sessions, users, verificationTokens } from "$lib/server/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { SvelteKitAuth } from "@auth/sveltekit";
import type { Provider } from "@auth/sveltekit/providers";
import Google from "@auth/sveltekit/providers/google";


const providers: Provider[] = [
    Google
]

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})

export const { handle, signIn, signOut } = SvelteKitAuth({
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }),
    providers,
    pages: {
        signIn: "/signin",
        signOut: "/signout"
    },
});