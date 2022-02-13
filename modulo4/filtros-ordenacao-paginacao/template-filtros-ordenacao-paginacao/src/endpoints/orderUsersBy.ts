import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const orderUsersBy = async (req: Request, res: Response): Promise<void> => {
    try {
        const sort: any = req.query.sort

        if (sort === "nome") {
            const users = await usersOrderByName()
            if (!users.length) {
                res.statusCode = 404
                throw new Error("No users found")
            }
            res.status(200).send(users)
        } else if (sort === "tipo") {
            const users = await usersOrderByType()
            if (!users.length) {
                res.statusCode = 404
                throw new Error("No users found")
            }
            res.status(200).send(users)
        }else{
            const users = await usersOrderByEmail()
            if (!users.length) {
                res.statusCode = 404
                throw new Error("No users found")
            }
            res.status(200).send(users) 
        }

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export async function usersOrderByName(): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio ORDER BY name ASC;
   `)

    return result[0]
}

export async function usersOrderByType(): Promise<any> {
    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio ORDER BY type ASC;
   `)

    return result[0]
}

export async function usersOrderByEmail(): Promise<any> {
    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio ORDER BY email ASC;
   `)

    return result[0]
}