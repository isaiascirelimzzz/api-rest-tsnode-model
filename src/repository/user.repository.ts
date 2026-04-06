import pool from "../database/dbMysql.js";
import type { RowDataPacket, ResultSetHeader} from "mysql2";
import { hasher } from "../helpers/auth.helper.js";

type User = {
    nome:string;
    email:string;
    username:string;
    password:string;
}

export const userRepository = {
    findAll: async ():Promise<User[]> => {
        const [rows] = await pool.query<(User & RowDataPacket)[]>(
            `SELECT id, nome, email, username FROM users`
        );
        
        return rows;
    },

    findById: async (id: number): Promise<User | null> => {
        if(!id || isNaN(id)){
            throw new Error('ID inválido')
        }

        const [rows] = await pool.query<(User & RowDataPacket)[]>(
            `SELECT id, nome, email, username FROM users where id = ?`,
            [id]
        );

        return rows[0] || null;
    },

    add: async (user:User) =>{
        const hashedPassword = await hasher(user.password);

        const [result] = await pool.query<ResultSetHeader>(
            `INSERT INTO users (nome, username, email, password)
            VALUES (?, ?, ?, ?)`,
            [user.nome, user.username, user.email, hashedPassword]
        );

        if(!result.insertId){
            throw new Error()
        }

        return result.insertId;
    },

    update: async (user:Partial<User>, id:number) =>{
        if(!id || isNaN(id)){
            throw new Error('ID inválido')
        }

        const fields = { ...user };

        if(fields.password){
            fields.password = await hasher(fields.password)
        }

        const keys = Object.keys(fields) as (keyof User)[];

        if(keys.length ===0){
            throw new Error('Nenhum campo para atualizar');
        }
        
        const setClausula = keys.map((key)=> `${key} = ?`).join(`, `)
        
        const values = keys.map(key => fields[key] ?? null);

        const [result] = await pool.query<ResultSetHeader>(
            `UPDATE users SET ${setClausula} WHERE id = ? `,
            [...values, id]
        )
        return result.affectedRows > 0;
    },

    delete: async(id:number) =>{
        if(!id || isNaN(id)){
            throw new Error('ID inválido')
        }

        const [result] = await pool.query<ResultSetHeader>(
            `DELETE FROM users WHERE id = ?`,
            [id]
        )

        return result.affectedRows > 0
    }
}