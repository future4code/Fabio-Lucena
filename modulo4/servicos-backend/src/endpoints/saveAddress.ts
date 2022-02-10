import axios from "axios"
import { Request, Response } from "express"
import { connection } from "../data/connection"
import { getAddressInfo } from "../services/getAddress"
import { AddressToSave } from "../types"

export const saveAdress = async (req: Request, res: Response): Promise<void> => {
    try {
        let cepQ: any = req.body.cep
        let numeroQ: any = req.body.numero

        const endereco: any = await getAddressInfo(cepQ, numeroQ)
        console.log(endereco)

        const address: AddressToSave = {
            cep: cepQ,
            logradouro: endereco.logradouro,
            numero: Number(numeroQ),
            complemento: endereco.complemento,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado
        }


        // if (!endereco) {
        //     res.statusCode = 404
        //     throw new Error("Endereço não encontrado")
        // }

        insertAdress(address)
        res.status(200).send({ endereco })

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export default async function insertAdress(endereco: AddressToSave): Promise<any> {
    const result = await connection.raw(`
      INSERT INTO enderecos_user
      (cep, logradouro, numero, complemento, bairro, cidade, estado)
      VALUES (
        '${endereco.cep}', 
        '${endereco.logradouro}', 
        '${endereco.numero}', 
        '${endereco.complemento}', 
        '${endereco.bairro}', 
        '${endereco.cidade}', 
        '${endereco.estado}');
   `)

    return result[0]
} 