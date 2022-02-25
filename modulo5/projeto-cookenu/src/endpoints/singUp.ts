import { Request, Response } from "express";
import { connection } from "../data/connection";
import { generateId } from "../services/generateId";
import { generateHash } from "../services/hash";
import { generateToken } from "../services/token";
import { AuthenticationData, user } from "../types";
import { createUserDb } from "../data/dbFunctions";

export default async function signUp(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'name', 'email' e 'password'")
        }

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email inválido!");
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Senha inválida!");
        }

        const [user] = await connection('Cookenu_users')
            .where({ email })

        if (user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado')
        }

        const id: string = generateId()

        const hashPassword = await generateHash(password)

        const input: AuthenticationData = {
            id: id,
        }

        const novoUsuario: user = { id, name, email, hashPassword }

        await createUserDb(novoUsuario)

        const token = generateToken(input)

        res.status(201).send({ token })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}