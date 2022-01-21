// Exercício 2
// a)
function obterEstatisticas2(numeros: number[]): {} {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const numeros2: number[] = [4, 5, 28, 1, 6, 2, 29, 52]

type amostra = {
    numeros: number[],
    obterEstatisticas: {}
}

const amostraDeDados: amostra = {
    numeros: numeros2,
    obterEstatisticas: obterEstatisticas2(numeros2)
}

console.log(amostraDeDados)

