import axios from 'axios'
import knex from 'knex';
import { Express } from 'express';
import { Request, Response } from "express"
import { Address, AddressToSave } from "../types";

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (cep: any, numero: number): Promise<AddressToSave> => {

    try {
        // const cep: any = req.params.cep

        const response = await axios.get(`${baseUrl}/${cep}/json/`)

        const address: AddressToSave = {
            cep: cep,
            logradouro: response.data.logradouro,
            numero: numero,
            complemento: response.data.complemento,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            estado: response.data.uf
        }

        return ( address )

    } catch (error: any) {
        console.log("Erro no serviço getAddressInfo:", error)
        return error.message
    }
}