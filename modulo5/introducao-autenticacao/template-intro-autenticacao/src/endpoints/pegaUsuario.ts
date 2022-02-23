import { Request, Response } from "express";
import connection from "../data/connection";
import { recebeToken } from "../services/recebeToken";


export const pegaUsuario = async(req: Request, res: Response) =>{
    try{
        const token = req.headers.authorization as string

        const autenticacao: any = recebeToken(token)
        
        if(!autenticacao){
            res.statusCode = 401
            res.statusMessage = "token inválido"
        }

        const usuario = await usuarioPorId(autenticacao.id)
        
        res.status(200).send({ 
            id: usuario.id,
            email: usuario.email
         })
    }catch(error: any){

    }
}

export const usuarioPorId = async(id: string): Promise<any> =>{
    const result = await connection
      .select("*")
      .from('User_aula_55')
      .where({ id });

    return result[0];
  
}