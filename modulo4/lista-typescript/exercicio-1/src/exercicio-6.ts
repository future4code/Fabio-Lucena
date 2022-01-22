type clientes = {
    nome: string,
    saldoTotal: number,
    debitos: number[] 
}

let arrayClientes: any[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function pegaDados(contas: any[]): any{
  
    function calculaSaldo(contas: any): any{
        let saldo = contas.saldoTotal
        let total = contas && contas.debitos.reduce((a: number, b: number)=> {return a + b}, 0)
        let conta1 = {...contas, saldoTotal: saldo - total, debitos: []}

        return conta1
    }

    const contasAtualizadas: any[] = contas.map(calculaSaldo)

    const contasNegat: any[] = contasAtualizadas.filter((a)=>{
        return a.saldoTotal < 0
    })

    return contasNegat

}

console.log(pegaDados(arrayClientes))