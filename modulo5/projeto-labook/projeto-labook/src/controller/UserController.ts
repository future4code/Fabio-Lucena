import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"

export type inputDTO = {
    name: string,
    email: string,
    password: string
}

export type loginInputDTO = {
    email: string,
    password: string
}


export default class UserController {
    constructor(
        private userBusiness: UserBusiness,
    ) { }

    signup = async (req: Request, res: Response) => {
        try {
            let message = "Success!"
            const { name, email, password } = req.body


            const input: inputDTO = {
                name, email, password
            }

            const token = await this.userBusiness.signup(input)

            res.send({ token })


        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            let message = "Success!"
            const { email, password } = req.body

            const input: loginInputDTO = {
                email: email,
                password: password
            }

            const token = await this.userBusiness.login(input)

            res.status(200).send({ message, token })

        } catch (error: any) {
            res.status(error.code || 400).send(error.message)
        }
    }
}