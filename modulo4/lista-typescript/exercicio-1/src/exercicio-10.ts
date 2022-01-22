function validaCpf (cpf: string): void{
    let digito1: string 
    let contador: number = 1
    let contador2: number = 0
    let dv1: number, dv2: number, resto: number
    
    for(let i = 0; i <= 8; i++){
          contador = Number(cpf[i]) * (11 - (i+1))
          contador2 += contador         
        }
        resto = contador2 % 11
        dv1 = 11 - resto
        console.log(dv1)
}

validaCpf("145382206")