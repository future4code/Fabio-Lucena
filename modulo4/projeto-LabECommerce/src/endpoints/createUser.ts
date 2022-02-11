import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const body: user = {
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        if(!body.name){
            throw new Error("Favor preencha todos os campos necessários!")
        }
        if(!body.email){
            throw new Error("Favor preencha todos os campos necessários!")
        }
        if(!body.password){
            throw new Error("Favor preencha todos os campos necessários!")
        }

        const user = await createUserSql(body)

        res.status(200).send(`Usuario criado com sucesso!`)

    }catch(error: any){
        res.send(error.message)
    }
}

export async function createUserSql(body: user): Promise<any> {
    const result = await connection.raw(`
      INSERT INTO labecommerce_users (id, name, email, password)
      VALUES ('${body.id}', '${body.name}', '${body.email}', '${body.password}');      
   `)

    return result[0]
} 