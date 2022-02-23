import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export const recebeToken = (token: string) =>{
    try{
    const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as any;
    
    console.log(tokenData)

    const result: AuthenticationData = {
        id: tokenData.id
    }

    return result

}catch(error: any){
       
}
}