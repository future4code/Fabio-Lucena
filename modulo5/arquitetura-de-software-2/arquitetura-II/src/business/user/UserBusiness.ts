import { hash } from "../../services/hashManager";
// import { insertUser } from "../../data/user/insertUser";
import { userData } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";
import { inputDTO } from "../../controller/user/UserController";
import UserData from "../../data/user/UserData";
import { compare } from "bcryptjs";

const userDB = new UserData


export default class UserBusiness{
   signupBusiness = async (userData: inputDTO): Promise<string> => {
      if (
         !userData.name ||
         !userData.nickname ||
         !userData.email ||
         !userData.password ||
         !userData.role
      ) {
         throw new Error('Preencha os campos "name","nickname", "email" e "password"')
      }

      const registeredUser = await userDB.selectUserByEmail(userData.email)

      if(!registeredUser){
         throw new Error("Usuário ja existe")
      }

      const cypherPassword = await hash(userData.password);
   
      const newUser = {
         ...userData,
         password: cypherPassword,
         id: generateId()
      }
   
      await userDB.insertUser(newUser)
   
      const token: string = generateToken({
         id: newUser.id,
         role: userData.role
      })
   
      return token
   
   }

   loginBusiness = async (
      email: string,
      password: string
   ) => {
      if (!email || !password) {
         throw new Error("'email' e 'senha' são obrigatórios")
      }
   
      const user = await userDB.selectUserByEmail(email)
   
      if (!user) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }
   
      const passwordIsCorrect: boolean = await compare(password, user.password)
   
      if (!passwordIsCorrect) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }
   
      const token: string = generateToken({
         id: user.id,
         role: user.role
      })
   
      return token
   }
} 


