import { Request, Response } from "express";
import connection from "../data/connection";
import { criaUsuarioDb } from "../data/criaUsuarioDb";
import { geraId } from "../services/geraId";
import { geraToken } from "../services/geraToken";
import { user } from "../types";

export default async function login(req: Request, res: Response): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Email inválido!");
       }

      const usuario = await buscaUsuarioPorEmail(email)
     
      if(usuario.password !== password){
          throw new Error("Senha inválida")
      }
     
      const token = geraToken(usuario.id)

      res.status(201).send({ token })

   } catch (error: any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}

export const buscaUsuarioPorEmail = async(email: string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT * FROM User_aula_55 WHERE email = '${email}';
    `)

    return result[0][0]
} 