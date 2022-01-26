enum SETOR {
    marketing="marketing",
    vendas="vendas",
    financeiro="financeiro"
}

const arrayFuncionarios: {}[] = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.marketing, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.vendas, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.financeiro, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.marketing, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.financeiro, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.vendas, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.marketing, presencial: true }
]

type colaboradores = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

function retornaColaborador(array: {}[]): void{
    const novoArray: {}[] = array.filter((colab: any)=>{
        return colab.setor === SETOR.marketing && colab.presencial === true
    })

    console.log(novoArray)
}

retornaColaborador(arrayFuncionarios)




