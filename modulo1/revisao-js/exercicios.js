// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoDoArray = array.length
    return tamanhoDoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let novoArray = []
    let tamanhoArray = array.length - 1
    for (let i = 0; i <= array.length; i++){
        novoArray[tamanhoArray - i] = array[i]
        }
        return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let troca
    
    for (let i = 1; i < array.length; i++){
        let j = i
        troca = array[i]

        while((j > 0) && (array[j-1] > troca)){
            array[j] = array[j-1]
            j--
        }
        array[j] = troca
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let j = 0
    let novoArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            novoArray[j] = array[i] 
            j++
            }   
        }
        return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let j = 0
    let novoArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            novoArray[j] = (array[i]  * array[i])
            j++
            }   
        }
        return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let max = 0
    for (let i = 0; i <= array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    if (num1 > num2){
            maior = num1
            const objeto1 = {
                maiorNumero: maior,
                maiorDivisivelPorMenor: (maior % num2) === 0,
                diferenca: maior - num2
            }
            return objeto1
        }else {
            maior = num2
            const objeto2 = {
                maiorNumero: maior,
                maiorDivisivelPorMenor: (maior % num1) === 0,
                diferenca: maior - num1
            }
            return objeto2
        } 
             
       
    
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for (let i = 0; i <= ((n*2) - 1); i++){
        array[i] = i
    }
    let j = 0
    let novoArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            novoArray[j] = array[i] 
            j++
            }   
        }
        return novoArray
    
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"  

    }else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"

        }else {
            return "Escaleno"
            }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let max = 0
    let max2 = 0
    let max3 = 0
    let min = array[0]
    let min2 
    let novoArray = []
    for (let i = 0; i <= array.length - 1; i++){
        if ( array[i] < min){
          min = array[i]
        }
    }
    max = min
    for (let i = 0; i <= array.length - 1; i++){
        if(array[i] > max){
            max = array[i]
        }
    }    
    max2 = min
    for (let i = 0; i <= array.length - 1; i++){
        if((array[i] > min) && (array[i] != max)){
          min = array[i]
          max2 = min
        }
    
    }
    min = max
  for (let i = 0; i <= array.length - 1; i++){
      if (array[i] < min){
        min = array[i]
      }
  }
  min2 = max
  for (let i = 0; i <= array.length - 1; i++){
      if ((array[i] < min2) && (array[i] != min)){
        min2 = array[i]
      }
  }    
    novoArray[0] = max2
    novoArray[1] = min2
    return novoArray
    

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}