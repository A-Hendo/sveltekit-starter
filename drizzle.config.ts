import 'dotenv/config';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/lib/server/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.AUTH_DRIZZLE_URL,
    },
    verbose: true,
    strict: true,
})