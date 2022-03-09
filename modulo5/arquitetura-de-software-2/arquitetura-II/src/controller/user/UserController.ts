import { Request, Response } from "express";
import UserBusiness, { signupBusiness } from "../../business/user/UserBusiness";
import { USER_ROLES } from "../../model/user";



export type inputDTO = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export default class UserController {
   constructor(private userBusiness: UserBusiness){}

   signup = async (req: Request, res: Response) => {

      const { name, nickname, email, password, role } = req.body

      const input: inputDTO = {
         name,
         nickname,
         email,
         password,
         role
      }
      try {
         const token: string = await this.userBusiness.signupBusiness(input)

         res
            .status(201)
            .send({
               message: "Usuário criado!",
               token
            })

      } catch (error: any) {
         res.status(400).send(error.message)
      }
   }
}
