import { Request, Response } from "express";
import { connection } from "../data/connection";
import { compareHash } from "../services/hash";
import { generateToken } from "../services/token";
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

      const user = await buscaUsuarioPorEmail(email)

      const comparePassword = await compareHash(password, user.password)

      if(!comparePassword){
          throw new Error("Senha inválida")
      }

      const userData = {
          id: user.id  
      }

      const token = generateToken(userData)

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
    SELECT * FROM Cookenu_users WHERE email = '${email}';
    `)

    return result[0][0]
} 