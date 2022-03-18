import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";
import { user, USER_ROLES } from "../types/user"

const UserDB = new UserDatabase
const hashManager = new HashManager
const idGenerator = new IdGenerator
const authenticator = new Authenticator

export class UserBusiness {

    signup = async (name: string, email: string, password: string, role: USER_ROLES) => {

        if (!name || !email || !password || !role) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const id: string = idGenerator.generateId()

        const cypherPassword = await hashManager.hash(password);

        await UserDB.insertUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })

        const authenticator = new Authenticator()

        const token: string = authenticator.generateToken({
            id,
            role: role
        })

        return token
    }

    login = async (email: string, password: string) => {

        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user: user = await UserDB.selectUserByEmail(email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const authenticator = new Authenticator()

        const token: string = authenticator.generateToken({
            id: user.id,
            role: user.role
        })

        return token
    }

    getAllUsers = async (token: string) => {
        const comparison = authenticator.getTokenData(token);

        if (!comparison) {
            throw new Error("Não autorizado")
        }

        const users = await UserDB.getUsers()

        return users
    }

    deleteUser = async (id: string, token: string) => {
        
        const comparison = authenticator.getTokenData(token);

        if (!comparison) {
            throw new Error("Não autorizado")
        }

        if(comparison.role !== "ADMIN"){
            throw new Error("Apenas administradores podem deletar usuários!")
        }

        return await UserDB.deleteUser(id)


    }

}