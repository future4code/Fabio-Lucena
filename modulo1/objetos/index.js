// Exercícios de interpretação de código
//Exercício 1:  
//a) O console irá imprimir:
// "Matheus Nachtergaele"
// "Virginia Cavendish"
// Canal: "Globo", horario: "14h"

//Exercício 2:
//a) O console irá imprimir:
    // nome: "Juca", 
	// idade: 3, 
	// raca: "SRD"

    // nome: "Juba", 
	// idade: 3, 
	// raca: "SRD"

    // nome: "Jubo", 
	// idade: 3, 
	// raca: "SRD"

//b) Esta é a sintaxe do operador spread que gera uma copia do objeto ou array, ambos inteiros.

//Exercício 3: 
//a) Primeiro será impresso "FALSE" 
//Depois será impresso "undefined" 

//b)O valor "false" impresso no console acontece, pois está sendo enviado como argumento da função o objeto pessoa, juntamente da chave "backender", cujo valor é "false".
//O valor "undefined" impresso no console acontece, pois está sendo enviado para a função o mesmo argumento do objeto pessoa, porém com uma chave inexistente no objeto.

//Exercícios de escrita de código:
//Exercício 1:
function imprimeApelido(pessoa){
   return pessoa;
}

const apelidoDaPessoa = {
   nome: "Amanda",
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}


console.log(`Eu sou ${imprimeApelido(apelidoDaPessoa.nome)}, mas pode me chamar de: ${imprimeApelido(apelidoDaPessoa.apelidos[0])}, ${imprimeApelido(apelidoDaPessoa.apelidos[1])} ou ${imprimeApelido(apelidoDaPessoa.apelidos[2])}`);

//b)
function imprimeApelido(pessoa){
    return pessoa;
}

const apelidoDaPessoa = {
    nome: "Fábio José",
    apelidos: ["binho", "Joe", "Zé"]
}

const apelidoNovo = {
    ...apelidoDaPessoa,
    apelidos: ["JoeLucena", "Fabão", "Joseph"]
}

console.log(`Eu sou ${imprimeApelido(apelidoNovo.nome)}, mas pode me chamar de: ${imprimeApelido(apelidoNovo.apelidos[0])}, ${imprimeApelido(apelidoNovo.apelidos[1])} ou ${imprimeApelido(apelidoNovo.apelidos[2])}`);

//Exercício 2:
function imprimeObjeto(objeto){
    const arrayPessoa = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    return console.log(arrayPessoa);
}

const pessoa = {
    nome: "Bruno",
    idade: 23, 
	profissao: "Instrutor"
}

const pessoa1 = {
    //...pessoa,
    nome: "Fabio",
    idade: 28,
    profissao: "Estudante"
}

imprimeObjeto(pessoa);
imprimeObjeto(pessoa1);

//Exercício 3: 
const carrinho = [];
function cestaDeFrutas(primeiraFruta, segundaFruta, terceiraFruta){
    carrinho.push(primeiraFruta, segundaFruta, terceiraFruta);
    return carrinho; 
}


const fruta1 = {
    nome: "Mamão",
    disponibilidade: true
}

const fruta2 = {
    nome: "Maçã",
    disponibilidade: true
}

const fruta3 = {
    nome: "Abacaxi",
    disponibilidade: true
}

cestaDeFrutas(fruta1, fruta2, fruta3);
console.log(carrinho);

//Desafio 1:
function cadastroObjeto(){
    const nome1 = prompt("Insira seu nome");
    const idade1 = prompt("Insira sua idade");
    const profissao1 = prompt("Insira sua profissão");
    objetoDeCadastro.nome = nome1;
    objetoDeCadastro.idade = idade1;
    objetoDeCadastro.profissao = profissao1;
    console.log(objetoDeCadastro);
    console.log(typeof objetoDeCadastro)
}

const objetoDeCadastro = {
    nome: "Fulano",
    idade: 20,
    profissao: "Alguma"
}
cadastroObjeto()

//Desafio 2:
function filmes(objeto1, objeto2){
    console.log("O primeiro filme foi lançado antes do segundo?", (filme1.ano < filme2.ano));
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", (filme1.ano === filme2.ano));
}

const filme1 = {
    nome: "Watchmen",
    ano: 2009
}

const filme2 = {
    nome: "...E o Vento Levou",
    ano: 1939
}

filmes(filme1, filme2);

//Desafio 3:
const carrinho = [];
function cestaDeFrutas(primeiraFruta, segundaFruta, terceiraFruta){
    carrinho.push(primeiraFruta, segundaFruta, terceiraFruta);
    return carrinho; 
}

function controleDoSacolao(fruta){
    fruta.disponibilidade = !fruta.disponibilidade;
    return fruta;
}
const fruta1 = {
    nome: "Mamão",
    disponibilidade: true
}

const fruta2 = {
    nome: "Maçã",
    disponibilidade: true
}

const fruta3 = {
    nome: "Abacaxi",
    disponibilidade: true
}

cestaDeFrutas(fruta1, fruta2, fruta3);
console.log(carrinho);

console.log(controleDoSacolao(fruta2))
