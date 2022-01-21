let minhaString = "Fabio";
let meuNumero = 4;
meuNumero = "fabio";
let meuNumero2 = 4;
meuNumero2 = "fabio";
var coresArcoIris;
(function (coresArcoIris) {
    coresArcoIris["VERMELHO"] = "vermelho";
    coresArcoIris["LARANJA"] = "laranja";
    coresArcoIris["AMARELO"] = "amarelo";
    coresArcoIris["VERDE"] = "verde";
    coresArcoIris["AZUL"] = "azul";
    coresArcoIris["ANIL"] = "anil";
    coresArcoIris["VIOLETA"] = "violeta";
})(coresArcoIris || (coresArcoIris = {}));
const pessoa1 = {
    nome: "Fabio",
    idade: 28,
    corFavorita: coresArcoIris.ANIL,
};
const pessoa2 = {
    nome: "Naruto",
    idade: 33,
    corFavorita: coresArcoIris.LARANJA,
};
const pessoa3 = {
    nome: "Sasuke",
    idade: 33,
    corFavorita: coresArcoIris.AZUL,
};
console.log(pessoa1, pessoa2, pessoa3);
//# sourceMappingURL=index.js.map