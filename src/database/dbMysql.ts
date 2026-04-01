// import das blibitecas do mysql(acessar o banco de dados) e do dotenv(configurar variaveis de ambiente)
import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';
import type { Pool } from 'mysql2/promise';


// tratando as variaveis de ambiente
dotenv.config();

if(!process.env.DB_HOST || 
  !process.env.DB_USER || 
  !process.env.DB_PASSWORD || 
  !process.env.DB_DATABASE || 
  !process.env.DB_PORT
){
    throw new Error('Variaveis de ambiente não definidas')
}

// abre pool de conexões para o banco de dados mySQL
const pool:Pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    waitForConnections: true,
    connectionLimit:6,
    queueLimit:0,
})

export default pool;