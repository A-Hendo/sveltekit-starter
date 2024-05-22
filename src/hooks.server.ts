import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { RetryAfterRateLimiter } from 'sveltekit-rate-limiter/server';

import { handle as authenticationHandle } from "./auth";

const limiter = new RetryAfterRateLimiter({
    // IP address & User Agent limiter
    IPUA: [5, 'm'],

    // IP address limiter
    // IP: [10, 'h'],

    // Cookie limiter
    // cookie: {
    //     name: 'limiterid', // Unique cookie name for this limiter
    //     secret: 'SECRETKEY-SERVER-ONLY', // Use $env/static/private
    //     rate: [2, 'm'],
    //     preflight: true // Require preflight call (see load function)
    // }
});

export const limiterHandle: Handle = async ({ event, resolve }) => {
    const status = await limiter.check(event);
    if (status.limited) {
        const response = new Response(
            `You are being rate limited. Please try after ${status.retryAfter} seconds.`,
            {
                status: 429,
                headers: { 'Retry-After': status.retryAfter.toString() }
            }
        );
        return response;
    }
    return await resolve(event);
};

export const handle: Handle = sequence(limiterHandle, authenticationHandle)
