import { AUTH_DRIZZLE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(AUTH_DRIZZLE_URL, { prepare: false })
export const db = drizzle(client);