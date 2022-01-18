// Exercício 2:

const operation = process.argv[2]
let num3 = process.argv[3]
let num1 = Number(num3)
let num4 = process.argv[4]
let num2 = Number(num4)
let result = 0

if (operation === undefined){
    console;log("\x1b[31m", "Não recebi nenhum parâmetro!")
}else if(num3 === undefined) {
    console.log("\x1b[31m", "Esperava por três parâmetros, recebi apenas um, ou nenhum")
} else if (num4 === undefined) {
    console.log("\x1b[31m","Esperava por três parâmetros, recebi apenas dois, faltou o terceiro parâmetro")
} else {
    if (operation === 'add') {
        result = num1 + num2
        return console.log(result)
    } else if (operation === 'sub') {
        result = num1 - num2
        return console.log(result)
    } else if (operation === 'mult') {
        result = num1 * num2
        return console.log(result)
    } else if (operation === 'div') {
        result = num1 / num2
        return console.log(result)
    }
}
