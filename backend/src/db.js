import pkg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

console.log("PG_USER:", process.env.PG_USER);
console.log("PG_PASSWORD:", process.env.PG_PASSWORD ? "****" : "NÃO DEFINIDO");

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: String(process.env.PG_PASSWORD), // força ser string
    port: Number(process.env.PG_PORT), 
});

// 🔥 força encoding WIN1252 na conexão
pool.query("SET client_encoding = 'UTF8'")
  .then(() => console.log("Encoding da sessão ajustado para UTF-8"))
  .catch(err => console.error("Erro ao ajustar encoding:", err));


export default pool;
