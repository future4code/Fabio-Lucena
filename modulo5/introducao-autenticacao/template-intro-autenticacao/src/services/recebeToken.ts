import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export const recebeToken = (token: string) =>{

    const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as any;

    const result: AuthenticationData = {
        id: tokenData.id
    }
    console.log(result)
    return result


}