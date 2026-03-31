//importação de tipos diretamente do express
import type { Request, Response, NextFunction } from "express";

export const validateCreateUser = (req: Request, res:Response, next:NextFunction)=>{
    const {email, password, username, name} = req.body;

    if(!email || !password || !username ||!name){
        return res.status(400).json({
            error: 'Dados obrigátorios não informados'
        })
    }
}