const arrayEmailFuncionarios: {}[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 


function retornaEmailColaborador(array: {}[]): void{
    const novoArray: {}[] = array.filter((colab: any)=>{
        return colab.role === "admin"
    }).map((colab: any)=>{
        return colab.email
    })

    console.log(novoArray)
}

retornaEmailColaborador(arrayEmailFuncionarios)

