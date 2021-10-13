// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  //implemente sua lógica aqui
  const altura = prompt("Insira a altura do retângulo");
  const largura = prompt("Insira a largura do retângulo");
  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Insira o ano atual");
  const anoDeNascimento = prompt("Insira seu ano de nascimento");
  console.log(anoAtual - anoDeNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso / (altura * altura));

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Por favor insira seu nome");
  const idade = prompt("Por favor insira sua idade");
  const email = prompt("Por favor insira seu email");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = prompt("Insira sua primeira cor favorira");
  const segundaCor = prompt("Insira sua primeira cor favorira");
  const terceiraCor = prompt("Insira sua primeira cor favorira");
  let arrayCores = [primeiraCor, segundaCor, terceiraCor];
  console.log(arrayCores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return (string1.length) === (string2.length);

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  i = array.length;
  //console.log(array[i-1]);
  return array[i-1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  i = array.length;
  primeiraPosicao = array[0];
  ultimaPosicao = array[i-1];
  array[0] = ultimaPosicao;
  array[i-1] = primeiraPosicao;
  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return (string1.toLowerCase() === string2.toLowerCase());

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Insira o ano atual");
  const anoDeNascimento = prompt("Insira seu ano de nascimento");
  const anoRg = prompt("Insir o ano de emissão de sua carteira de identidade");
  let idade = (anoAtual - anoDeNascimento);
  let idadeRg = (anoAtual - anoRg);

  console.log((idade <= 20 && idadeRg >= 5)||(idade > 20 && idade <= 50 && idadeRg >= 10)||(idade > 50 && idadeRg > 15));

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let multiploDeQuatro = (ano%4);
  let multiploDeCem = (ano%100);
  let multiploDeQuatrocentos = (ano%400);

  return ((multiploDeQuatrocentos === 0 && multiploDeCem === 0 && multiploDeQuatro === 0) || ((multiploDeCem !== 0)&&(multiploDeQuatro === 0)))
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt("Você é maior de idade?");
  const ensinoMedio = prompt("Você possui ensino médio completo?");
  const dispHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  let idade = maiorDeIdade.toLowerCase();
  let medio = ensinoMedio.toLowerCase();
  let horario = dispHorario.toLowerCase();

  console.log(idade === "sim" && medio === "sim" && horario === "sim");


}