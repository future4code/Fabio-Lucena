import { Request, Response } from "express"
import UserBusiness, { inputDTO, loginInputDTO } from "../business/UserBusiness"
import UserDatabase from "../data/UserDatabase"

export default class UserController {
    private userBusiness: UserBusiness

    constructor(
       
    ) {
        this.userBusiness = new UserBusiness(new UserDatabase)
     }


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