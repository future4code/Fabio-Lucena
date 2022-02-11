import { Request, Response } from "express"
import { connection } from "../data/connection"
import { purchase, user } from "../types"

export const createPurchases = async (req: Request, res: Response): Promise<void> => {
    try {

        const productId = req.body.product_id

        const product = await getProduct(productId)
        const price = product.price


        const body: purchase = {
            id: Date.now().toString(),
            quantity: Number(req.body.quantity),
            total_price: (price * Number(req.body.quantity)),
            user_id: req.body.user_id,
            product_id: req.body.product_id
        }

        if (!body.quantity) {
            throw new Error("Favor preencha todos os campos necessários!")
        }
        if (!body.total_price) {
            throw new Error("Favor preencha todos os campos necessários!")
        }
        if (!body.user_id) {
            throw new Error("Favor preencha todos os campos necessários!")
        }
        if (!body.product_id) {
            throw new Error("Favor preencha todos os campos necessários!")
        }

        await createPurchaseSql(body)

        res.status(200).send(`Compra criada com sucesso!`)

    } catch (error: any) {
        res.send(error.message)
    }
}


export async function createPurchaseSql(body: purchase): Promise<any> {
    const result = await connection.raw(`
      INSERT INTO labecommerce_purchases (id, quantity, total_price, user_id, product_id)
      VALUES ('${body.id}', 
      '${body.quantity}', 
      '${body.total_price}', 
      '${body.user_id}',
      '${body.product_id}');      
   `)

    return result[0]
}

export async function getProduct(id: string): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM labecommerce_products 
      WHERE id = '${id}';      
   `)

    return result[0][0]
} 