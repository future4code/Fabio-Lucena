import { user } from "../model/UserTypes";
import BaseDatabase from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
    signup = async (user: user) => {
        await UserDatabase.connection('labook_users')
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
    }

    userByEmail = async (email: string): Promise<any> => {
        try {
            const result = await UserDatabase.connection('labook_users')
                .select("*")
                .where({ email });

            return result[0]

        } catch (error: any) {
            throw new Error(error.slqMessage)
        }

    }

    
} 