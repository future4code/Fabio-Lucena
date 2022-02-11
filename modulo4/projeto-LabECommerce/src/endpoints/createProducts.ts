import { Request, Response } from "express"
import { connection } from "../data/connection"
import { products } from "../types"

export const createProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const body: products = {
            id: Date.now().toString(),
            name: req.body.name,
            price: Number(req.body.price),
            image_url: req.body.image_url
        }

        if(!body.name){
            throw new Error("Favor preencha todos os campos necessários!")
        }
        if(!body.price){
            throw new Error("Favor preencha todos os campos necessários!")
        }
        if(!body.image_url){
            throw new Error("Favor preencha todos os campos necessários!")
        }

         await postProduct(body)

        res.status(200).send("Produto cadastrado com sucesso!")

    } catch (error: any) {
        res.send(error.message)
    }
}

export async function postProduct(body: products): Promise<any> {
    const result = await connection.raw(`
      INSERT INTO labecommerce_products
      (id, name, price, image_url)
      VALUES (
          '${body.id}',
          '${body.name}',
          '${body.price}',
          '${body.image_url}'
      );      
   `)

    return result[0]
} 