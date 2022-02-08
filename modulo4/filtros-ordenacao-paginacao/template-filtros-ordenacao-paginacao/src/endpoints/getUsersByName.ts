import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getUsersByName= async(req: Request,res: Response): Promise<void> =>{
   try {
      const name: any = req.query.name

      const users = await selectUsersFilter(name)

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

export default async function selectUsersFilter(name: string):Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${name}%"
   `)

   return result[0]
}