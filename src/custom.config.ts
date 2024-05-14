import type { Provider } from "@auth/sveltekit/providers";
import Google from "@auth/sveltekit/providers/google";
import Resend from "@auth/sveltekit/providers/resend";

// Disabling SSR can hurt SEO performance
// See https://kit.svelte.dev/docs/single-page-apps
export const serverSideRendering = true;

// Authjs oauth Server side or client side authentication
export const serverAuthentication = serverSideRendering;

// Authjs providers
export const authenticationProviders: Provider[] = [Google, Resend];

// Resend email marketing
export const emailMarketing: boolean = true;