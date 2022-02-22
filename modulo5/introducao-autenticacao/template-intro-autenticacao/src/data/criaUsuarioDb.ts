import connection from "../connection";
const nomeTabela = "User_aula_55"
export const criaUsuario = async(id: string, email: string, password: string) =>{
    await connection.insert({id, email, password}).into(nomeTabela)
}