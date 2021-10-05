/*No exercício 1 o primeiro console.log irá imprimir "a.False". O segundo console.log irá imprimir "b.False".
O terceiro console.log irá imprimir "c. True". O quarto e último console.log irá imprimir "d. boolean"*/

/*No exercício 2 o console.log irá imprimir na tela a concatenação de duas strings inseridas pelo usuário, no caso 
um número seguido do outro, como exemplo, ao digitar 2 e 3, o console irá imprimir 23 e não a soma dos dois números*/

/*Exercício 3: Para que a soma entre dois números seja impressa será necessário utilizar o comando Number() para as 
duas variáveis que o usuário inseriu e só então realizar a operação na variável soma, assim o console.log irá imprimir 
realmente a soma dos dois números*/ 

//Exercícios de escrita de código:

//Exercício 1:
let idade = prompt("Qual a sua idade?");
let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo(a)?");

idade = Number(idade);
idadeMelhorAmigo = Number(idadeMelhorAmigo);

console.log("Sua idade é maior do que a do seu melhor amigo(a)? - ", idade > idadeMelhorAmigo );
console.log("A diferença de idade é:", (idade - idadeMelhorAmigo)); */

//Exercício 2:
let numeroPar = prompt("Por favor insira um numero par!");

numeroPar = Number(numeroPar);
let resto = (numeroPar%2); // A divisão de um número par por 2 sempre será zero

//A divisão de um número ímpar dividio por um número par sempre terá resto, nunca será zero 

console.log(resto); 

//Exercício 3:
let idade = prompt("Qual é a sua idade?");
idade = Number(idade);

console.log((idade * 12), "Meses");
console.log((idade * 365), "dias");
console.log((idade * 8760), "Horas")

//Exercício 4:
let primeiroNumero = prompt("Favor inserir um numero!");
let segundoNumero = prompt("Favor inserir mais um numero!");

primeiroNumero = Number(primeiroNumero);
segundoNumero = Number(segundoNumero);

console.log("O primeiro é maior que o segundo?", (primeiroNumero>segundoNumero));
console.log("O primeiro número é igual ao segundo?", (primeiroNumero===segundoNumero));
console.log("O primeiro número é divísivel pelo segundo?", ((primeiroNumero%segundoNumero) === 0));
console.log("Osegundo número é divisível pelo primeiro", ((segundoNumero%primeiroNumero) === 0)); 

//Desafio Exercício 1:
let kelvin = ((77 - 32) * (5/9)) + 273.15;
let fahrenheit = ((80) * (9/5)) + 32 ;
let fahrenheitKelvin = ((30) * (9/5)) + 32 ;
let kelvinFahrenheit = ((86 - 32) * (5/9)) + 273.15;

let celsius = prompt("Insira a temperatura em graus Celsius (°C)");
celsius = Number(celsius);
let celsiusFahrenheit = ((celsius) * (9/5)) + 32 ;
let celsiusKelvin = ((celsiusFahrenheit - 32) * (5/9)) + 273.15;

console.log(kelvin, "K");
console.log(fahrenheit, "°F");
console.log(fahrenheitKelvin, "°F", kelvinFahrenheit, "K");
console.log("A temperatura informada converitda:", celsiusFahrenheit, "°F", "/", celsiusKelvin, "K"); 
 
//Desafio Exercício 2:
let valorPago = 280 * 0.05;
let valorDesconto = valorPago * 0.85;

console.log(valorPago);
console.log(valorDesconto); 

//Desafio Exercício 3:
let libraParaQuilograma = 20 * 0.453592;
let oncaParaQuilograma = 10.5 * 0.0283495;
let milhasParaMetro = 100 * 1609.34;
let pesParaMetro = 50 * 0.3048;
let galoesParaLitro = 103.56 * 3.78541;
let xicaraParaLitro = 450 * 0.284131

console.log("20lb equivalem a", libraParaQuilograma, "kg");
console.log("10.5oz equivalem a", oncaParaQuilograma, "kg");
console.log("100mi equivalem a", milhasParaMetro, "m");
console.log("50ft equivalem a", pesParaMetro, "m");
console.log("103.56gal equivalem a", galoesParaLitro, "l");
console.log("450 xic equivalem a", xicaraParaLitro, "l");

let milhasUsuario = prompt("Insira uma distância em milhas para conversão");
milhasUsuario = Number(milhasUsuario);
console.log(milhasUsuario+"mi", "equivalem a", (milhasUsuario*1609.34), "m");



