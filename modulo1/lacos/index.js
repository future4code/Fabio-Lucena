//Exercícios de interpretação de código:
//Exercício 1: O código está realizando um laço e dentro deste, está realizando um incremento da variavel valor, somando sempre o valor de i++.
//Sendo assim, ele imprimir depois de passar 4 vezes pelo loop o valor 10.
//Exercício 2 : 
//a) Serão impressos, todos os numero maiores do que 18: "19, 21, 23 ,25, 27, 30".
//b) Sim, o for...of... é suficiente, podendo ser utilizado apenas um console.log dentro do bloco de operação do for...if... ou um código onde há a declaração de uma variavel global para ser usada como contadora
// pro exemplo uma variavel i. Esta váriavel precisa ser incrementada a cada vez que o bloco for executado, junto com o console.log do indice i e o valor neste índice com o console.log(numero).
//Exercício 3: Seria impresso 4 linhas com um numero crescente de asteriscos em cada linha
// *
// **
// ***
// ****
//Exercício de escrita de código:
//Exercício 1:
const quantidadeBichinhos = Number(prompt("Insira a quantidade de bichinhos que você possui"));
let arrayDeBichinhos = []
if (quantidadeBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!");
    }else{
        for(let i = 0; i < quantidadeBichinhos; i++ ){
            arrayDeBichinhos[i] = prompt("Insira o nome do seu bicinho de estimação");    
            }
            console.log(arrayDeBichinhos);
        }

//Exercício 2: 
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// a)
for (i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
    } 

//b)
for (i = 0; i < arrayOriginal.length; i++){
    console.log((arrayOriginal[i] / 10))
    }

//c)
let novoArray = []
for (i = 0; i < arrayOriginal.length; i++){
    if ((arrayOriginal[i] % 2) === 0){
        novoArray.push(arrayOriginal[i])
        }
    }
    console.log(novoArray)    

//d)
let arrayDeString = []
for (i = 0; i < arrayOriginal.length; i++){
    arrayDeString[i] = `O elemento do índex ${i} é: ${arrayOriginal[i]}`
    }
    console.log(arrayDeString)
let cont = 0
for(let numero of arrayOriginal){
    arrayDeString[cont] =  `O elemento do índex ${cont} é: ${numero}`
    cont++
    }
    console.log(arrayDeString)

//e)    
let valorMaximo = 0
let valorMinimo = 10

for (i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > valorMaximo){
        valorMaximo = arrayOriginal[i]    
        }
    }
for (i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] < valorMinimo){
        valorMinimo = arrayOriginal[i]
        }
    
    }    

console.log(`O maior valor é ${valorMaximo}`)
console.log(`O menor valor é ${valorMinimo}`)

//Desafio 1:
console.log("Vamos jogar!");
let numeroEscolhido = Number(prompt("Por favor escolha um número!"))
let numeroChutado = Number(prompt("Por favor chute um número!"))
let i = 0
//primeiro if é para o caso de acertarem de primeira!
if (numeroChutado === numeroEscolhido){
    console.log(`    Acertou!!
    O número de tentativas foi: 1
    `); 
}else{

        while (numeroChutado !== numeroEscolhido){
                
            if (numeroChutado > numeroEscolhido){
                        console.log(`
                                    O número chutado foi ${numeroChutado}
                                    Errou, O número escolhido é menor
                        `);
                        }else if (numeroChutado < numeroEscolhido){
                                console.log(`
                                    O número chutado foi ${numeroChutado}
                                    Errou, O número escolhido é maior
                                `);
                                }
                                i++
                                numeroChutado = Number(prompt("Por favor chute um número!"))
                                
            }

            console.log(`Acertou!!`)
            console.log(`O número de tentativas foi: ${i}`); 

        }        

//Desafio 2:
console.log("Vamos jogar!");
let numeroEscolhido = Math.floor(Math.random() * 100) 
//console.log(numeroEscolhido) - utilizado apenas para teste!
let numeroChutado = Number(prompt("Por favor chute um número!"))
let i = 0
//primeiro if é para o caso de acertarem de primeira!
if (numeroChutado === numeroEscolhido){
    console.log(`    Acertou!!
    O número de tentativas foi: 1
    `); 
}else{

        while (numeroChutado !== numeroEscolhido){
                
            if (numeroChutado > numeroEscolhido){
                        console.log(`
                                    O número chutado foi ${numeroChutado}
                                    Errou, O número escolhido é menor
                        `);
                        }else if (numeroChutado < numeroEscolhido){
                                console.log(`
                                    O número chutado foi ${numeroChutado}
                                    Errou, O número escolhido é maior
                                `);
                                }
                                i++
                                numeroChutado = Number(prompt("Por favor chute um número!"))
                                
            }

            console.log(`Acertou!!`)
            console.log(`O número de tentativas foi: ${i}`); 

        }  