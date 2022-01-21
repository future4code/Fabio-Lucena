function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(2, 2, 4));
function imprimeCores() {
    const cor1 = process.argv[2];
    const cor2 = process.argv[3];
    const cor3 = process.argv[4];
    console.log([cor1, cor2, cor3]);
}
imprimeCores("amarelo", "vermelho", "azul");
//# sourceMappingURL=index.js.map