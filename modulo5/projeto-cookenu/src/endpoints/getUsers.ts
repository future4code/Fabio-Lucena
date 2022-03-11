import { Request, Response } from "express";
import { connection } from "../data/connection";
import { compareToken } from "../services/token";

export default async function getUsers(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        const token = req.headers.authorization

        if (!id || !req.params.id) {
            res.statusCode = 500
            throw new Error("id não informado")
        }

        if (!token || !req.headers.authorization) {
            res.statusCode = 401
            throw new Error("Não autorizado")
        }

        const comparison = compareToken(token)

        if (!comparison) {
            res.statusCode = 401
            throw new Error("Não autorizado'")
        }

        const userProfile = await userById(id)

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







// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNzk0ZDZhLThmZGMtNGFmMy05ZWFkLTE5ZGVkMzlmODY2MiIsImlhdCI6MTY0NTgwMzAyMywiZXhwIjoxNjQ1ODg5NDIzfQ.MS29vGExq3cM4jlaZJNtUFk10Bsd3gh-dFwYOVfYAP0