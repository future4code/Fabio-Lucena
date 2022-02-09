import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {

        let name: any = req.query.name
        let type: any = req.query.type
        let sortKey: any = req.query.sort
        let page: any = req.query.page
        let filter: any = ""
        let sort
        let offSet: any = 5 * (page - 1)
        let pagination

        if(name !== ""  && type !== "" ){
            filter = `WHERE name LIKE "%${name}%" AND type LIKE "%${type}%"`
            
        }else if(name === "" && type !== ""){
            filter = `WHERE name LIKE "%%" AND type LIKE "%${type}%"`
        }else if(name !== "" && type === ""){
            filter = `WHERE name LIKE "%${name}%" AND type LIKE "%%"`
        }else {
            name = ""
            filter = `WHERE name LIKE "%${name}%" AND type LIKE "%${type}%" `
        }

        if(sortKey === "nome"){
            sort = `ORDER BY name ASC`
        }else if(sortKey === "tipo"){
            sort = `ORDER BY type ASC`
        }else{
            sort = `ORDER BY name DESC`
        }

        if(page === ""){
            page = 1
            pagination = `LIMIT 5 OFFSET ${offSet}`
        }else {
            pagination = `LIMIT 5 OFFSET ${offSet}`
        }

        // WHERE name LIKE "%${}%" AND type LIKE "%${type}%"

        const users = await selectAllUsers(filter, sort, pagination)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export default async function selectAllUsers(filter: string, sort: string, pagination: any): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      ${filter}
      ${sort}
      ${pagination};
   `)

    return result[0]
}