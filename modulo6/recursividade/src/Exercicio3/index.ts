const somaInt2 = (n: number): number =>{
    let soma: number = 0
    for (let i = 0; i <= n; i++){
        soma += i
    }
    return soma
}

console.log(somaInt2(5))