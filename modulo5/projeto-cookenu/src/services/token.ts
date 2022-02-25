import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../types';

const expiresIn = "1d";

export const generateToken = (input: AuthenticationData) =>{
    const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )

    return token
}