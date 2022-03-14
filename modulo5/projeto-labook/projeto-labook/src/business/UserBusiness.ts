import { inputDTO, loginInputDTO } from "../controller/UserController";
import UserDatabase from "../data/UserDatabase";
import IdGenerator from "../services/IdGenerator";
import Authenticator from "../services/Authenticator";
import { user } from "../model/UserTypes";
import HashManager from "../services/HashManager";
import { CustomError } from "../error/CustomError";


export default class UserBusiness {
    constructor(
        private userDB: UserDatabase,
        private hashManager: HashManager,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    signup = async (input: inputDTO): Promise<string> => {

        if (!input.name || !input.email || !input.password) {
            const message = '"name", "email" and "password" must be provided'
            throw new CustomError(400, message)
        }

        if (input.email.indexOf("@") === -1) {
            throw new CustomError(400, "Inválid email!");
        }

        const user: any = await this.userDB.userByEmail(input.email)

        if (user) {
            throw new CustomError(409, "Email already registered")
        }

        const id: string = this.idGenerator.generateId()

        const cypherPassword = await this.hashManager.hash(input.password);

        const newUser: user = {
            id: id,
            name: input.name,
            email: input.email,
            password: cypherPassword
        }

        await this.userDB.signup(newUser)

        const token: string = this.authenticator.generateToken({ id })

        return token;

    }

    login = async (input: loginInputDTO): Promise<string> => {

        if (!input.email || !input.password) {

            const message = '"email" and "password" must be provided'
            throw new CustomError(400, message)
        }

        const queryResult: any = await this.userDB.userByEmail(input.email)

        if (!queryResult) {

            let message = "User Not Found"
            throw new CustomError(404, message)
        }

        const user: user = {
            id: queryResult.id,
            name: queryResult.name,
            email: queryResult.email,
            password: queryResult.password
        }

        const passwordIsCorrect: boolean = await this.hashManager.compare(input.password, user.password)

        if (!passwordIsCorrect) {
            throw new CustomError(401, "Invalid credentials")
        }

        const token: string = this.authenticator.generateToken({
            id: user.id
        })

        return token

    }

}

