~~~JavaScript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let cont = 0
    const teste = arrayDeNumeros.find(element => element === numeroEscolhido)
  if (teste === numeroEscolhido) {
    for(let i = 0; i <= arrayDeNumeros.length; i++){
      if(arrayDeNumeros[i] === teste){
        cont++
      }
    }
    return `O número ${numeroEscolhido} aparece ${cont}x`
  }else {
    return "Número não encontrado"
  }
}
~~~