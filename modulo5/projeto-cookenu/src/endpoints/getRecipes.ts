import { Request, Response } from "express";
import { connection } from "../data/connection";
import { compareToken } from "../services/token";

export default async function getRecipe(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        const token: any = req.headers.authorization

        if (!id || !req.params.id) {
            res.statusCode = 422
            throw new Error("Informações incompletas")
        }

        const comparison = compareToken(token)

        if (!comparison) {
            res.statusCode = 401
            throw new Error("Não autorizado")
        }

        const recipeToSend = await catchRecipe(id)
        console.log(recipeToSend)
        if (!recipeToSend || recipeToSend === undefined) {
            throw new Error("Receita não encontrada")
        }

        const createdAt = recipeToSend.date.toLocaleString()
        let date = ""
        for(let i=0;i<=9;i++){
            date = date + (createdAt[i])
        }
        
        const recipe = {
            id: recipeToSend.id,
            title: recipeToSend.title,
            description: recipeToSend.description,
            cratedAt: date
        }

         
            res.status(400).send({ recipe })
        


    } catch (error: any) {
        
            res.send({ message: error.message })
      
    }
}

export const catchRecipe = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Cookenu_recipes WHERE id = '${id}';
    `)

    return result[0][0]
}