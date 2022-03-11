import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { generateId } from "../services/generateId";
import { compareToken } from "../services/token";
import { recipes } from "../types";

export default async function createRecipe(req: Request, res: Response): Promise<void> {
    try {

        const { title, description } = req.body
        const token: any = req.headers.authorization

        if (!title || !req.body.title) {
            res.statusCode = 422
            throw new Error("Preencha os campos necessários")
        }

        if (!description || !req.body.description) {
            res.statusCode = 422
            throw new Error("Preencha os campos necessários")
        }

        const comparison = compareToken(token)

        if (!comparison) {
            res.statusCode = 401
            throw new Error("Não autorizado")
        }

        const date = generateDate()

        const recipe: recipes = {
            id: generateId(),
            title: title,
            description: description,
            date: date,
            user_id: comparison.id
        }

        console.log(recipe)

        await createRecipeDB(recipe)

        res.status(200).send("Receita criada com sucesso!")

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}

export const generateDate = () => {
    let dateTime = Date.now(); // anything
    let date = new Date(dateTime);
    let options: any = {
        year: 'numeric', month: 'numeric', day: 'numeric',
    };

    let newDate = date.toLocaleString('pt', options); //25/02/2022

    let year = newDate[6] + newDate[7] + newDate[8] + newDate[9]
    let month = newDate[3] + newDate[4]
    let day = newDate[0] + newDate[1]

    let result = `${year}-${month}-${day}`

    return result
}

export const createRecipeDB = async (recipe: recipes): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO Cookenu_recipes (id, title, description, date, user_id)
        VALUES (
            '${recipe.id}',
            '${recipe.title}',
            '${recipe.description}',
            '${recipe.date}',
            '${recipe.user_id}'
        );
    `)

    return result[0]
}