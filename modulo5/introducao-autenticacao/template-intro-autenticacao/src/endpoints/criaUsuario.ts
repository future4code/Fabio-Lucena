import { Request, Response } from "express";
import connection from "../data/connection";
import { criaUsuarioDb } from "../data/criaUsuarioDb";
import { geraId } from "../services/geraId";
import { geraToken } from "../services/geraToken";
import { AuthenticationData, user } from "../types";

export default async function criaUsuario(req: Request, res: Response): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Email inválido!");
       }
   
       if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Senha inválida!");
       }

      const [usario] = await connection('User_aula_55')
         .where({ email })

      if (usario) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = geraId()
      const input: AuthenticationData = {
         id: id
      }

      const novoUsuario: user = { id, email, password, name, nickname }
        

      await criaUsuarioDb(novoUsuario)

      const token = geraToken(input)   

      res.status(201).send({ token })

   } catch (error: any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}