import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = req.query.order
        const search = req.query.search
        let sort: string
        let products: any

        if (!search) {
            if (order === "asc") {
                sort = "ORDER BY name ASC"
                products = await getProducts(sort)
            } else if (order === "desc") {
                sort = "ORDER BY name DESC"
                products = await getProducts(sort)
            } else if (!order) {
                sort = ""
                products = await getProducts(sort)
            }
        }else{
            if (order === "asc") {
                sort = `WHERE name LIKE "%${search}%" ORDER BY name ASC`
                products = await getProducts(sort)
            } else if (order === "desc") {
                sort = `WHERE name LIKE "%${search}%" ORDER BY name DESC`
                products = await getProducts(sort)
            } else if (!order) {
                sort = `WHERE name LIKE "%${search}%"`
                products = await getProducts(sort)
            }
        }

        res.status(200).send({ products })

    } catch (error: any) {
        res.send(error.message)
    }
}

export async function getProducts(sort: string): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM labecommerce_products ${sort} ;      
   `)

    return result[0]
} 