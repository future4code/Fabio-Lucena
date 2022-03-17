import UserRepository from "../business/UserRepository";
import { user } from "../model/UserTypes";
import BaseDatabase from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase implements UserRepository {
    signup = async (user: user): Promise<user> => {
        try {
            await UserDatabase.connection('labook_users')
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
            return user
        } catch (error: any) {
            throw new Error("Error creating user in database")
        }

    }

    userByEmail = async (email: string): Promise<user | null> => {
        try {
            const result: user[] = await UserDatabase.connection('labook_users')
                .select("*")
                .where({ email });

            return result.length ? result[0] : null

        } catch (error: any) {
            throw new Error(error.slqMessage)
        }

    }


} 