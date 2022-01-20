// Exercício 4
// a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log(pokemon1)

// b e c) Eu usaria o npm start, já que o script está montado com o tsc e a build do index.js. Se não usaria o comando tsc dentro da raiz do projeto com o typescrypt instsalado
// e depois rodaria a build com o node através do node ./build/nome-do-projeto.js

// d) Com o comando tsc e o caminho onde estão os projetos ou seus nomes se estiverem na mesma pasta, separado por espaços