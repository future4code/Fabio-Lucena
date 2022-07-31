const somaInt = (n: number): number =>{
    if(n >= 0){
        return n + somaInt(n - 1)
    }

    return 0
}

console.log(somaInt(5))