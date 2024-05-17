import { db } from "$lib/server/db";
import { PaymentExist } from "$lib/server/queries";
import { accounts, sessions, users, verificationTokens } from "$lib/server/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { SvelteKitAuth } from "@auth/sveltekit";
import { authenticationProviders } from "./supakit.config";


export const providerMap = authenticationProviders.map((provider) => {
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
    providers: authenticationProviders,
    pages: {
        signIn: "/signin",
        signOut: "/signout"
    },
    callbacks: {
        // Checks user has made a payment before they can sign in
        async signIn({ profile }) {
            return await PaymentExist(profile.email);
        },
    }
});