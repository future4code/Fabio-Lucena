// Exercício 1
function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "escaleno"
    } else if (a === b && b === c) {
        return "Equilátero"
    } else {
        return "Isósceles"
    }
}

console.log(checaTriangulo(2, 2, 4))


