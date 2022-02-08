import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getUsersByType= async(req: Request,res: Response): Promise<void> =>{
   try {
      const type: any = req.params.type

      const users = await selectUsersFilter(type)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export default async function selectUsersFilter(type: string):Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type LIKE "%${type}%"
   `)

   return result[0]
}