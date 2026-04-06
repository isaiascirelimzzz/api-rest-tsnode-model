//importação de tipos diretamente do express
import type { Request, Response, NextFunction } from "express";


//creio nn precisar documentar, basta ler o codigo
export const addUser = (req: Request, res:Response, next:NextFunction)=>{
    const {email, password, username, nome} = req.body;

    // if(!email || !password || !username ||!nome){
    //     return res.status(400).json({
    //         error: 'Dados obrigátorios não informados'
    //     })
    // }

    next();
}

export const getUserById = (req: Request, res:Response, next:NextFunction)=>{
    const id = Number(req.params.id)

    if(!id || isNaN(id)){
        return res.status(400).json({
            error: 'Dados obrigátorio não informado ou inválido'
        })
    }

    next();
}

export const updateUser = (req: Request, res:Response, next:NextFunction)=>{
    const {id} = req.params

    if(!id){
        return res.status(400).json({
            error: 'Dado obrigátorio não informados'
        })
    }

    next();
}

export const deleteUser = (req: Request, res:Response, next:NextFunction)=>{
    const {id} = req.params

    if(!id){
        return res.status(400).json({
            error: 'Dado obrigátorio não informado'
        })
    }

    next();
}