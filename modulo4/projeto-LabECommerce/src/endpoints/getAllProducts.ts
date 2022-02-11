import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try{
        
        const products = await getProducts()

        res.status(200).send({ products })

    }catch(error: any){
        res.send(error.message)
    }
}

export async function getProducts(): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM labecommerce_products;      
   `)

    return result[0]
} 