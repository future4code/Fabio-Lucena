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
//# sourceMappingURL=index.js.map