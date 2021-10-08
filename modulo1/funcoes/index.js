// Exercícios de interpretação de código:
//Exercício 1:
//a) O primeiro console.log irá imprimir "10", pois está enviando 2 como parâmetro, que será multiplicado por 5.
//b) A função iria ser executada, realizando os cálculos, mas como não há o comando console.log, nada seria impresso no console.

//Exercício 2:
//a) A função outraFuncao irá receber como parâmetro um texto (no caso o que o usuário digitar) e irá deixá-lo todo em letras minúsculas e verificando se a frase possui a palavra cenoura. Sua 
//utilidade é a de verificar se uma palavra consta no texto inserido.
//b) i. irá retornar TRUE.
//   ii. irá retornar TRUE.
//   iii. irá retornar TRUE.
// Irá retornar sempre TRUE para estas frases, pois ao diminuir todas as letras da frase para letras minúsculas, se existir a palavra "cenoura" não irá importar como ela esteja escrita, seja com letras
//Maiúsculas ou toda em caixa alta, o programa detectará a palavra.

//Exercício de escrita de código:
//Exercício 1:
//a)
function minhasInformacoes(){
  return  console.log("Eu sou Fábio, tenho 28 anos, moro em Curitiba e sou estudante.");
}

minhasInformacoes();

//b)
function informacoesPessoas(p1, p2, p3, p4){
    return console.log(`Eu sou ${p1}, tenho ${p2} anos, moro em ${p3} e sou ${p4}`);
}

let nomeDaPessoa = prompt("Insira seu nome"); 
let idadeDaPessoa = prompt("Insira sua idade");
let enderecoDaPessoa = prompt("Insira sua cidade");
let profissaoDaPessoa = prompt("Insira sua profissão");

informacoesPessoas(nomeDaPessoa, idadeDaPessoa, enderecoDaPessoa, profissaoDaPessoa);

//Exercício 2: 
//a) 
function soma(s1, s2){
    return console.log(s1+s2);
}
let numero1 = prompt("Insira um numero");
let numero2 = prompt("Insira um outro numero");
numero1 = Number(numero1);
numero2 = Number(numero2);

soma(numero1, numero2);

//b)
function maiorIgual(n1, n2){
    return console.log(n1>=n2);
}
let primeiroNumero = prompt("Insira um numero");
let segundoNumero = prompt("Insira um outro numero");
primeiroNumero = Number(primeiroNumero);
segundoNumero = Number(segundoNumero);

maiorIgual(primeiroNumero, segundoNumero);

//c)
function parOuNao(numero){
    return console.log((numero % 2) === 0);
}
let parOuImpar = prompt("Insira um numero para saber se é par ou ímpar");
parOuImpar = Number(parOuImpar);

parOuNao(parOuImpar);

//d)
function mensagem (frase){
    return console.log(frase.length), console.log(frase.toUpperCase())
}
let fraseMensagem = prompt("Insira uma mensagem");

mensagem(fraseMensagem);

//Exercício 3:
function soma(a1, a2){
    return console.log("Soma:", (a1+a2));
}
function diferenca(a1, a2){
    return console.log("Diferença:", (a1-a2));
}
function multiplicacao(a1, a2){
    return console.log("Multiplicação:", (a1*a2));
}
function divisao(a1, a2){
    return console.log("Divisão:", (a1/a2));
}

let numeroUm = prompt("Insira um numero");
let numeroDois = prompt("Insira um outro numero");
numeroUm = Number(numeroUm);
numeroDois = Number(numeroDois);

console.log(`Números inseridos: ${numeroUm} e ${numeroDois}`);
soma(numeroUm, numeroDois);
diferenca(numeroUm, numeroDois);
multiplicacao(numeroUm, numeroDois);
divisao(numeroUm, numeroDois);

//Desafio 1:
//a)
const parametro = (insercao) => {
    const param = insercao;
    return param;
}

let entradaUsuario = prompt("Insira um parametro");

const impressaoParametro = parametro(entradaUsuario);

console.log(impressaoParametro);

//b)
const parametro = (insercao) => {
    const param = insercao;
    return param;
}
const parametro2 = (d1, d2) => {  
    
}

let primeiroParametro = prompt("Insira um valor");
let segundoParametro = prompt("Insira outro valor");
primeiroParametro = Number(primeiroParametro);
segundoParametro = Number(segundoParametro);

let semRetorno = parametro2(primeiroParametro, segundoParametro);

let resultado = (primeiroParametro + segundoParametro);

const impressao = parametro(resultado);
console.log(impressao);

//Desafio 2:
function pitagoras(cateto1, cateto2){
    hip = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2))
    return hip;
}

let primeiroCateto = prompt("Insira o valor do primeiro cateto");
let segundoCateto = prompt("Insira o valor do outro cateto");
primeiroCateto = Number(primeiroCateto);
segundoCateto = Number(segundoCateto);

pitagoras(primeiroCateto, segundoCateto);
console.log(hip);

