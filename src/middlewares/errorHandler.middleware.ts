//importação de tipos diretamente do express
import type { Request, Response, NextFunction } from "express";



export const errorHandler = (err:any, req:Request, res:Response, next:NextFunction)=>{
    console.error(err);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        error: err.message || "Erro interno do servidor",
    });
};