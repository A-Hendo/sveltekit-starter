import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";


const sql = postgres("...", { max: 1 })
const db = drizzle(sql);
await migrate(db, { migrationsFolder: "drizzle" });
await sql.end();