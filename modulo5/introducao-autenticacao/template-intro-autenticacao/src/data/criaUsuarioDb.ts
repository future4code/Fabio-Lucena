import connection from "./connection";
import { user } from "../types";
const nomeTabela = "User_aula_55"
export const criaUsuarioDb = async(usuario: user) =>{
    await connection.raw(`
    INSERT INTO User_aula_55 (id, email, password, name, nickname)
    VALUES(
        '${usuario.id}',
        '${usuario.email}',
        '${usuario.password}',
        '${usuario.name}',
        '${usuario.nickname}'
    )
    `)
}