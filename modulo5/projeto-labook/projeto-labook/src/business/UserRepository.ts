import { user } from "../model/UserTypes";

export default interface UserRepository{
    signup(user: user): Promise<user>
    userByEmail(email: string): Promise<user | null>
}