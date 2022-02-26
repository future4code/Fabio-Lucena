import connection from "./connection";
import { user } from "../types";
const nomeTabela = "User_aula_55"
export const createUserDb = async(usuario: user) =>{
    await connection.raw(`
    INSERT INTO User_aula_55 (id, email, password, name, nickname, role)
    VALUES(
        '${usuario.id}',
        '${usuario.email}',
        '${usuario.hashPassword}',
        '${usuario.name}',
        '${usuario.nickname}',
        '${usuario.role}'
    );
    `)
} 