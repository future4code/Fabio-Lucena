type extrato = {
    valor: number,
    data: string,
    descricao: string
}

type conta = {
    nome: string,
    cpf: number,
    dataNascimento: string,
    saldo: number,
    debitos: number[],
    extrato: extrato[]
}

export let contasUsuarios: conta[] = [
    {
        nome: "Ronaldo",
        cpf: 24528436410,
        dataNascimento: "22/05/1989",
        saldo: 50,
        debitos: [25],
        extrato: [{valor: 25, data: "25/01/2022", descricao: "Mc"}]
    }
]