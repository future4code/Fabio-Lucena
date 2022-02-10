import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try{
        
        const users = await getUsers()

        res.status(200).send({ users })

    }catch(error: any){
        res.send(error.message)
    }
}

export async function getUsers(): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM labecommerce_users;      
   `)

    return result[0]
} 