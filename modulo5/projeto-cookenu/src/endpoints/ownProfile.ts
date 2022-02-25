import { Request, Response } from "express";
import { connection } from "../data/connection";
import { compareToken } from "../services/token";

export default async function ownProfile(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization

        if (!token || !req.headers.authorization) {
            res.statusCode = 401
            throw new Error("Não autorizado'")
        }

        const comparation = compareToken(token)

        if (!comparation) {
            res.statusCode = 401
            throw new Error("Não autorizado'")
        }

        const userProfile = await userById(comparation.id)

        res.status(200).send({
            id: userProfile.id,
            name: userProfile.name,
            email: userProfile.email
        })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}

export const userById = async (id: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from('Cookenu_users')
        .where({ id });

    return result[0];
}