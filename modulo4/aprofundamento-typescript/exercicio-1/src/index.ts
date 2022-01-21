// Exercício 1
// a)
let minhaString: string = "Fabio"
// minhaString = 4, diz que o tipo string não pode ser atribuído ao tipo string

// b) 
let meuNumero: number | string = 4
meuNumero = "fabio" 
// ou usar o tipo any
let meuNumero2: any = 4
meuNumero2 = "fabio"

// c)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresArcoIris,
}

enum coresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const pessoa1: pessoa = {
    nome: "Fabio",
    idade: 28,
    corFavorita: coresArcoIris.ANIL,
}

const pessoa2: pessoa = {
    nome: "Naruto",
    idade: 33,
    corFavorita: coresArcoIris.LARANJA,
}

const pessoa3: pessoa = {
    nome: "Sasuke",
    idade: 33,
    corFavorita: coresArcoIris.AZUL,
}

console.log(pessoa1, pessoa2, pessoa3)

