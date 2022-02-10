export type Address = {
    state: string,
    city: string,
    neighborhood: string,
    street: string
}

export type AddressToSave = {
    cep: string,
    logradouro: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string
}