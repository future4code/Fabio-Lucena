import { Request, Response } from "express";
import connection from "../data/connection";
import { compareToken } from "../services/token";


export const getUser = async(req: Request, res: Response) =>{
    try{
        const token = req.headers.authorization as string

        const autenticacao: any = compareToken(token)

        if(autenticacao.role !== "NORMAL"){
            res.statusCode = 401
            throw new Error("Apenas usuarios normais podem acessar esta funcionalidade");

        }

        const usuario = await usuarioPorId(autenticacao.id)

        res.status(200).send({ 
            id: usuario.id,
            email: usuario.email,
            role: usuario.role
         })
    }catch(error){
        res.status(401).send(error.message)
    }
}

export const usuarioPorId = async(id: string): Promise<any> =>{
    const result = await connection
      .select("*")
      .from('User_aula_55')
      .where({ id });

    return result[0];

} 