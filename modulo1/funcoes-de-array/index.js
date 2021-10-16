//Exercícios de interpretação de código:
//Exercício 1: será impresso todo o array usuarios com seus respectivos objetos.

//Exercício 2: irá retornar apenas os nomes contidos nos objetos no array usuarios. Sendo assim o novoArrayB será um array com os nomes
// [ "Amanda Rangel", "Laís Petra", "Letícia Chijo" ]

//Exercício 3: Será impresso todos os itens dentro do array que não possuem apelido "Chijo" (item.apelido !== "Chijo"). Sendo assim será impresso:
// [ { nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" } ]

//Exercícios de escrita de código:
//Exercício 1:
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a)
const pegaNomeCachorrinhos = (cachorrinho) => {
    return cachorrinho.nome
    }

const nomeDosCachorrinhos = pets.map(pegaNomeCachorrinhos)

console.log(nomeDosCachorrinhos)

//b)
const apenasSalsichas = (salsicha) => {
    return salsicha.raca === "Salsicha"
    }
const nomeSalsicha = (salsicha) => {
    return salsicha
    }    

const pesquisaSalsicha = pets.filter(apenasSalsichas).map(nomeSalsicha)
console.log(pesquisaSalsicha)

//c)
const apenasPoodles = (poodle) => {
    return poodle.raca === "Poodle"
    }
const nomeMensagemPoodles = (poodle) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`
    }    

const pesquisaPoodle = pets.filter(apenasPoodles).map(nomeMensagemPoodles)
console.log(pesquisaPoodle)

//Exercício 2:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)
const pesquisaNomeDosProdutos = (produtos1) => {
    return produtos1.nome
    }
   
const nomeProdutos = produtos.map(pesquisaNomeDosProdutos)
console.log(nomeProdutos)    

//b)
function copiaArray (produtos1) {
    const produtos2 = {
        ...produtos1,
        preco: produtos1.preco * 0.95
    }
    return produtos2
    }

const precoJaComDesconto = produtos.map(copiaArray) //fiz isso para que o array original não fosse modificado para o próximo exercício
console.log(precoJaComDesconto)

//console.log(produtos)    

//c)
const pesquisaBebidas = (produtos1) => {
    return produtos1.categoria === "Bebidas"
    }

const apenasBebidas = (produtos1) => {
    return produtos1
    }

const imprimeBebidas = produtos.filter(pesquisaBebidas).map(apenasBebidas)
console.log(imprimeBebidas)    

//d)
const pesquisaYpe = (produtos1) => {
    return produtos1.nome.includes("Ypê")
    }
const imprimeYpe = (produtos1) => {
    return produtos1
    }

const produtosYpe = produtos.filter(pesquisaYpe).map(imprimeYpe)
console.log(produtosYpe)

//e)
const imprimeProdutosYpe = (produtos1) => {
    return  `Compre ${produtos1.nome} por R$${produtos1.preco}`
    }

const produtosYpe2 = produtos.filter(pesquisaYpe).map(imprimeProdutosYpe)
console.log(produtosYpe2)    

//Desafio 1:
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//a)
const nomePokemon = (pokemons) => {
    return pokemons.nome
} 
const recebeNomePokemons = pokemons.map(nomePokemon)
const NomePokemons2 = recebeNomePokemons.sort()
console.log(NomePokemons2)   

//b)
const tiposDePokemon = (pokemons) => {
    return pokemons.tipo
    }

const tiposSemRepeticao = (parametro1, i) => {
    return arrayDeTiposDePokemons.indexOf(parametro1) === i
    }
const imprimeTipo = (pokemons) => {
    return pokemons
    }    



const arrayDeTiposDePokemons = pokemons.map(tiposDePokemon)
//console.log(arrayDeTiposDePokemons)

const arrayNovo = arrayDeTiposDePokemons.filter(tiposSemRepeticao).map(imprimeTipo)
console.log(arrayNovo)
