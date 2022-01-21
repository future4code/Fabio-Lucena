// Exercício 3
// a)
type post = {
    autor: string,
    texto: string
}
let post1: post, post2: post, post3: post, post4: post, post5: post
let posts: {}[]

 posts = [
    post1 = {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
     post2 = {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    post3 = {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
     post4 = {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    post5 = {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }

  ]

    function buscarPostsPorAutor(posts: {}[], autorInformado: string): any {
    
    return posts.filter(
      (post: any) => {
        return post.autor === autorInformado
      }
    )
  }

  console.log(posts)
  console.log(buscarPostsPorAutor(posts, "Dobby"))
  

