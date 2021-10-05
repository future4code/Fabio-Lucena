/*No exercício 1 de interpretação de código: No primeiro console.log irá imprimir o valor da váriavel b que é 10.
Já o segundo console.log irá imprimir o valor de a e o novo valor de b que seriam respectivamente 10 5.*/

/*No exercício 2 de interpretação de código: O console irá imprimir o seguinte resultado, após as váriaveis terem seus valores
declarados alterados: 10 10 10. */

/*No exercício 3 de interpretação de código: O programa irá pedir para o usuário a quantidade de horas que o mesmo trabalha
por dia. Em seguida irá pedir ao usuário a quantia recebida por dia. Então irá emitir um alert para o usuário com o valor recebido
por hora.
As váriaveis poderiam ser nomeadas como "horasTrabalhadas" e "quantiaRecebida".*/

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

//Foi impresso o tipo undefined para ambas as variáveis, pois este é o tipo atribuído a váriaveis sem valor algum.

nome = prompt("Qual o seu nome?");
idade = prompt("Qual sua idade?");

console.log(typeof nome);
console.log(typeof idade);

//Agora ambas as variáveis são do tipo string, já que tudo o que o usuário insere através de um prompt é string.

console.log("Olá", nome+",","você tem", idade);

let primeiraPergunta = prompt("Você gosta de animes?");
let segundaPergunta = prompt("Você gosta de lasanha?");
let terceiraPergunta = prompt("Você gosta de programar?");

console.log("Você gosta de animes? -", primeiraPergunta);
console.log("Você gosta de lasanha? -", segundaPergunta);
console.log("Você gosta de programar? -", terceiraPergunta);

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO:

let primeiroNumero = prompt("Insira um numero");
let segundoNumero = prompt("Insira outro numero");

primeiroNumero = Number(primeiroNumero);
segundoNumero = Number(segundoNumero);
console.log("O primeiro numero somado ao segundo numero resulta em:", (primeiroNumero + segundoNumero));
console.log("O primeiro numero multiplicado pelo segundo numero resulta em:", (primeiroNumero * segundoNumero));



