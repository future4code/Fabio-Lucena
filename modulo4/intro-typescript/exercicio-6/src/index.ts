// Exercício 1
function calcul(num1: number, num2: number): void {

    const soma: number = num1 + num2

    const sub: number = num1 - num2

    const mult: number = num1 * num2

    let maiorNumero: number 

    if(num1 > num2){
        maiorNumero = num1
    }else{
        maiorNumero = num2
    }


    console.log( 
    `A soma é: ${soma},
    a subtração é: ${sub},
    a multiplicação é: ${mult},
    o maior número é: ${maiorNumero}`)
}

calcul(3, 2)




