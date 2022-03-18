import { user } from "../../model/user";
import BaseDatabase from "./BaseDatabase";

export default class UserData extends BaseDatabase{
    selectUserByEmail = async (email: string): Promise<user> => {
        try {
           const result = await BaseDatabase.connection("to_do_list_users")
              .select("*")
              .where({ email })
     
           return {
              id: result[0].id,
              name: result[0].name,
              nickname: result[0].nickname,
              email: result[0].email,
              password: result[0].password,
              role: result[0].role
           }
     
        } catch (error: any) {
           throw new Error(error.slqMessage)
        }
     }

     insertUser = async(user: user) => {
        await BaseDatabase.connection.insert(user).into('to_do_list_users')
     }
}