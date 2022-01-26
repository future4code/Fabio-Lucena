function converteRomano(numero: number): string{
    const valores: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanos: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let saida: string = ""

    if(numero === 0){
        return "0"
    }else{
        let i: number = 0
        while(numero > 0){
            if(numero >= valores[i]){
                saida += (romanos[i])
                numero -= valores[i]
            }else{
                i++
            }
        }
        console.log(saida)
        return saida
    }
}

console.log(converteRomano(4))