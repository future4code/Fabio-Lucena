// Exercício 1-a) Acessamos ester parâmetros através do ccomando process.argv nas posições acima de 2, já que as primeiras já são posições ocupadas.

// b)
const nameReceived = process.argv[2]
const age = process.argv[3]


if (nameReceived === undefined || age === undefined) {
    console.log("\x1b[31m","Esperava por dois parâmetros, recebi apenas um")
} else {
    console.log("\x1b[34m",`Olá, ${nameReceived}! Você tem ${age} anos.`)
    
    // C)
    console.log("\x1b[34m",`Olá, ${nameReceived}! Você tem ${age} anos. Em sete anos você terá ${Number(age) + 7}`)
}




