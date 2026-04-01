//importação de tipos diretamente do express
import type { Request, Response, NextFunction } from "express";

export const validateAdd = (req: Request, res:Response, next:NextFunction)=>{
    const {email, password, username, name} = req.body;

    if(!email || !password || !username ||!name){
        return res.status(400).json({
            error: 'Dados obrigátorios não informados'
        })
    }

    next();
}

export const validateGetById = (req: Request, res:Response, next:NextFunction)=>{
    const {id} = req.params

    if(!id){
        return res.status(400).json({
            error: 'Dado obrigátorio não informado'
        })
    }

    next();
}

export const validateUpdate = (req: Request, res:Response, next:NextFunction)=>{
    const {id} = req.params

    if(!id){
        return res.status(400).json({
            error: 'Dado obrigátorio não informados'
        })
    }

    next();
}

export const validateDelete = (req: Request, res:Response, next:NextFunction)=>{
    const {id} = req.params

    if(!id){
        return res.status(400).json({
            error: 'Dado obrigátorio não informado'
        })
    }

    next();
}