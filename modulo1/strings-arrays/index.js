//Exercícios de interpretação de código
//Exercício 1: O primeiro console.log irá imprimir "a. undefined", pois não foi inserido nenhuma informação no array. O segundo console.log irá imprimir "b. null", já que a informação null 
//foi adicionada ao array.  o Terceiro console.log irá imprimir "c. 11". O quarto console.log irá imprimir "d. 3", 3 é a posição 0 do array indicada pela variável i=0. No quinto console.log
// será impresso na tela "e. 3 19 5 6 7 8 9 10 11 12 13", já que a variável i no momento vale 0 e é informado a posição i+1 equivalendo a posição 1 do array. O sexto console.log irá imprimir
// "f. 9", já que i=0 a posição i+6 será a posição 0+6.

//Exercício 2: o console.log irá imprimir "SUBI NUM ÔNIBUS EM MIRROCOS 27".

//Exercícios de escrita de código
//Exercício 1:
const nomeDoUsuario = prompt("Informe seu nome");
const emailDoUsuario = prompt("Informa seu e-mail");

console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o),", nomeDoUsuario+"!");

//Exercício 2:
const array = ['hamburguer', 'churrasco', 'strogonoff', 'Pizza', 'Frango frito'];
console.log(array);

console.log('Essas são minhas comidas favoritas:');
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

const comidaDoUsuario = prompt('Favor insira uma de suas comidas favoritas');
array[1] = comidaDoUsuario;

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

//Exercício 3: 
let tarefa, tarefa1, tarefa2;
const listaDeTarefas = [0, 0, 0];
tarefa = prompt("Favor insira a primeira tarefa a ser realizada no dia");
listaDeTarefas[0] = tarefa;
tarefa1 = prompt("Favor insira a segunda tarefa a ser realizada no dia");
listaDeTarefas[1] = tarefa1;
tarefa2 = prompt("Favor insira a terceira tarefa a ser realizada no dia");
listaDeTarefas[2] = tarefa2;
console.log(listaDeTarefas);

i = prompt("Digite o índice de uma tarefa entre 0, 1 ou 2");
listaDeTarefas.splice(i, 1);
console.log(listaDeTarefas);

//Não consegui realizar os desafios com os comandos ensinados até agora.
//Desafio 1:
let frase = prompt("Insira uma frase:");
console.log(frase.split(" "));

//Desafio 2: 
const fruta = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let indice = fruta.indexOf('Abacaxi');
console.log(indice, fruta.length);

