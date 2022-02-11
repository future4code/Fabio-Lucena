import { Request, Response } from "express";
import { connection } from "../data/connection";

export const searchPurchase = async (req: Request, res: Response): Promise<void> =>{
    try{
        const id: any = req.params.user_id

        if(!id){
            throw new Error("Favor preencha todos os campos necessários!")
        }

        const allPurchases = await getPurchases()
        
        const purchases = allPurchases.filter((item: any)=>{
            return item.user_id === id
        }).map((item: any)=>{
            return item
            
        })
        

        res.status(200).send(purchases)

    }catch(error: any){

    }
}


export async function getPurchases(): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM labecommerce_purchases;      
   `)

    return result[0]
} 