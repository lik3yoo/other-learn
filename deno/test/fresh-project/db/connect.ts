import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();
const client = await new Client().connect({
	hostname: env.DB_HOST,
	username: "root",
	password: env.DB_PASSWORD,
	db: "fresh-db",
});

export default client;
