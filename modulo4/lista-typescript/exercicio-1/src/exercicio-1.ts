
function imprimeDataNasciento(nome: string, dataNascimento: string): void{
    let novoArray: string[] = dataNascimento.split("/")
    console.log("\x1b[31m", `Olá me chamo ${nome}, nasci no dia ${novoArray[0]} do mês de ${novoArray[1]} do ano de ${novoArray[2]}`)
}

imprimeDataNasciento("Fabio", "02/03/1993")