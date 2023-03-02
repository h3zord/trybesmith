import mysql from 'mysql2/promise';
import 'dotenv/config';

const connection = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  port: Number(process.env.MYSQLPORT),
  database: process.env.MYSQLDATABASE,
}); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query

export default connection;