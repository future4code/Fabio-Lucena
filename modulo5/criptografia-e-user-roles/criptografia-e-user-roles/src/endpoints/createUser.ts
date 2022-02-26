import { Request, Response } from "express";
import connection from "../data/connection";
import { createUserDb } from "../data/DBfunctions";
import { generateId } from "../services/generateId";
import { generateHash } from "../services/hash";
import { generateToken } from "../services/token";
import { AuthenticationData, user } from "../types";

export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, nickname, email, password, role } = req.body
        if (!name || !nickname || !email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
        }

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email inválido!");
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Senha inválida!");
        }

        const [usario] = await connection('User_aula_55')
            .where({ email })

        if (usario) {
            res.statusCode = 409
            throw new Error('Email já cadastrado')
        }

        const id: string = generateId()

        const hashPassword = await generateHash(password) 

        const input: AuthenticationData = {
            id: id,
            role: role
        }

        const novoUsuario: user = { id, email, hashPassword, name, nickname, role }

        await createUserDb(novoUsuario)

        const token = generateToken(input)

        res.status(201).send({ token })

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}