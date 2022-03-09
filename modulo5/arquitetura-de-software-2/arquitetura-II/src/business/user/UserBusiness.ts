import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { userData } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";
import { inputDTO } from "../../controller/user/UserController";
import UserData from "../../data/user/UserData";

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
   
      await insertUser(newUser)
   
      const token: string = generateToken({
         id: newUser.id,
         role: userData.role
      })
   
      return token
   
   }
} 


