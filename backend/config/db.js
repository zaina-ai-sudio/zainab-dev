import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Connection pool bana rahe hain — single connection ke bajaye pool use karna
// behtar hai kyunke ye multiple requests ko efficiently handle karta hai
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "zainab_portfolio",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
