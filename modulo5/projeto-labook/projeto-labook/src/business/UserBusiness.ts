import { inputDTO, loginInputDTO } from "../controller/UserController";
import UserDatabase from "../data/UserDatabase";
import IdGenerator from "../services/IdGenerator";
import Authenticator from "../services/Authenticator";
import { user } from "../model/UserTypes";
import HashManager from "../services/HashManager";


export default class UserBusiness {
    constructor(
        private userDB: UserDatabase,
        private hashManager: HashManager,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
        ){}

    signup = async (input: inputDTO): Promise<string> => {

        if (!input.name || !input.email || !input.password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
        }

        if (input.email.indexOf("@") === -1) {
            throw new Error("Email inválido!");
        }

        const user: any = await this.userDB.userByEmail(input.email)

        if(user){
            throw new Error("Email already registered")
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

    login = async(input: loginInputDTO)=>{
        
        if (!input.email || !input.password) {
           
            const message = '"email" and "password" must be provided'
            throw new Error(message)
        }

        const queryResult: any = await this.userDB.userByEmail(input.email)

        if (!queryResult) {
            
            let message = "Invalid credentials"
            throw new Error(message)
        }

        const user: user = {
            id: queryResult.id,
            name: queryResult.name,
            email: queryResult.email,
            password: queryResult.password
        }

        const passwordIsCorrect: boolean = await this.hashManager.compare(input.password, user.password)

        if (!passwordIsCorrect) {
            
            throw new Error("Invalid credentials")
        }

        const token: string = this.authenticator.generateToken({
            id: user.id
        })

        return token

    }

}

