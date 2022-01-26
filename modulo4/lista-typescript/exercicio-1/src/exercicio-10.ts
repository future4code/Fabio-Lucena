function validaCpf (cpf: string): boolean{

  let cpfNovo: string = cpf.replace(/[^0-9]/g, '')
  let cpfValido: boolean

  if(cpfNovo === "11111111111" || cpfNovo === "22222222222" || cpfNovo === "33333333333" || cpfNovo === "44444444444" || cpfNovo === "55555555555" || cpfNovo === "66666666666" || cpfNovo === "77777777777" || cpfNovo === "88888888888" || cpfNovo === "99999999999" || cpfNovo === "00000000000" ){
    return cpfValido = false
  }else{

  // console.log(cpfNovo)

  let digito1: string 
  let contador: number = 1
  let contador2: number = 0
  let contador3: number = 1
  let contador4: number = 0
  let dv1: number, dv2: number, resto: number, resto2: number
  
  for(let i = 0; i <= 8; i++){
        contador = Number(cpfNovo[i]) * (11 - (i+1))
        contador2 += contador         
      }
      resto = contador2 % 11
      dv1 = 11 - resto
      

      if(dv1 >= 10){
        dv1 = 0
      }

      // console.log(dv1)

      for(let i = 0; i <= 8; i++){
        contador3 = Number(cpfNovo[i]) * (11 - (i))
        contador4 += contador3         
      }
      contador4 += (dv1 * 2)
      console.log("contador4", contador4)
      resto2 = contador4 % 11
      console.log("resto2", resto2)
      dv2 = 11 - resto2
      console.log(dv2)

      if(dv2 >= 10){
        dv2 = 0
      }
      console.log(dv2)

      if(Number(cpfNovo[9]) === dv1 && Number(cpfNovo[10]) === dv2){
        return cpfValido = true
      }else {
        return cpfValido = false
      }

      
    }
    

}

// validaCpf("145.382.206-20")
console.log(validaCpf("145.382.206-20"))