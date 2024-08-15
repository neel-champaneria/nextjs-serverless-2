// import { PrismaClient } from "@prisma/client";

// const db = new PrismaClient();

// export default db;

import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
// import dotenv from "dotenv";
import ws from "ws";

// dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.POSTGRES_PRISMA_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
let db;

export default process.env.NODE_ENV === "development"
  ? new PrismaClient()
  : new PrismaClient({ adapter });
