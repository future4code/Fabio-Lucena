import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try{
        
        const user = await getUsers()
        const allPurchases = await getPurchases()


        const users = user.map((item: any)=>{
            const purchases: any = allPurchases.filter((purchase: any)=>{return purchase.user_id === item.id})

            return {
                id: item.id,
                name: item.name,
                email: item.email,
                password: item.password,
                purchases: purchases
            }
        })

        res.status(200).send({ users })

    }catch(error: any){
        res.send(error.message)
    }
}

export async function getUsers(): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM labecommerce_users;      
   `)

    return result[0]
} 

 export async function getPurchases(): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM labecommerce_purchases;      
   `)

    return result[0]
} 