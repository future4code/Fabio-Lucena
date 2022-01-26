function anagrama(palavra: string): number{
    let contador: number = 1
    if(palavra.length > 1){
        for(let i = 1; i <= (palavra.length ); i++){
            contador = contador * i   
        }   
        return contador
    }
}

console.log(anagrama("mesa"))