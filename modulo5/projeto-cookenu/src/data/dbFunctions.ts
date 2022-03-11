import { connection } from "./connection";
import { user } from "../types";


export const createUserDb = async(usuario: user) =>{
    await connection.raw(`
    INSERT INTO Cookenu_users (id, name, email, password)
    VALUES(
        '${usuario.id}',
        '${usuario.name}',
        '${usuario.email}',
        '${usuario.hashPassword}'
    );
    `)
}