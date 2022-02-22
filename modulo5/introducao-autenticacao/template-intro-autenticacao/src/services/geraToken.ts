import * as jwt from "jsonwebtoken";

const expiresIn = "2min";

export const geraToken = (id: string) =>{
    const token = jwt.sign(
        {id: id},
        process.env.JWT_KEY as string,
        { expiresIn }
    )

    return token
}