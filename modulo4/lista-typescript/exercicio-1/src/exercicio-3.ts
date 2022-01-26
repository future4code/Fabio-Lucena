enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
}

function imprimeFilme(name: string, year: number, gender: GENERO, rating?: number ): any{ 
   
        const novoFilme: Filme = {
            nome: name,
            ano: year,
            genero: gender,
            pontuacao: rating
        }

        return novoFilme
}

console.log(imprimeFilme("Duna", 2021, GENERO.ACAO))