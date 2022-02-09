import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getAllUsersPage = async(req: Request,res: Response): Promise<void> =>{
   try {
      const page: any = req.query.page  
      let offSet: any = 5 * (page - 1)

      const users = await selectAllUsers(offSet)

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

export default async function selectAllUsers(offSet: number):Promise<any> {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      LIMIT 5 OFFSET ${offSet} ;
   `)

   return result[0]
}