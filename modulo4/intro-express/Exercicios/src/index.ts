import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

type usuarios = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}


const usersArray: usuarios[] = [
    {
      id: 1,
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442",
      email: "Sincere@april.biz",
      website: "hildegard.org",
      
    },
    {
      id: 2,
      name: "Ervin Howell",
      phone: "010-692-6593 x09125",
      email: "Shanna@melissa.tv",
      website: "anastasia.net"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      phone: "1-463-123-4447",
      email: "Nathan@yesenia.net",     
      website: "ramiro.info", 
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      phone: "493-170-9623 x156",
      email: "Julianne.OConner@kory.org",
      website: "kale.biz",  
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      phone: "(254)954-1289",
      email: "Lucio_Hettinger@annie.ca",
      website: "demarco.info"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      phone: "1-477-935-8478 x6430",
      email: "Karley_Dach@jasper.info",
      website: "ola.org"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      phone: "210.067.6132",
      email: "Telly.Hoeger@billy.biz",
      website: "elvis.io"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      phone: "586.493.6943 x140",
      email: "Sherwood@rosamond.me",
      website: "jacynthe.com"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      phone: "(775)976-6794 x41206",
      email: "Chaim_McDermott@dana.io",
      website: "conrad.com"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      phone: "024-648-3804",
      email: "Rey.Padberg@karina.biz",
      website: "ambrose.net"
    }
  ]

type post = {
    userId: number,
    id: number,
    title: string,
    body: string
}  

const postsArray: post[] = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
        userId: 2,
        id: 11,
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
      },
      {
        userId: 2,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
      },
      {
        userId: 2,
        id: 13,
        title: "dolorum ut in voluptas mollitia et saepe quo animi",
        body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
      },
      {
        userId: 4,
        id: 32,
        title: "doloremque illum aliquid sunt",
        body: "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
      },
      {
        userId: 4,
        id: 33,
        title: "qui explicabo molestiae dolorem",
        body: "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
      },
      {
        userId: 5,
        id: 48,
        title: "ut voluptatem illum ea doloribus itaque eos",
        body: "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
      },
      {
        userId: 8,
        id: 72,
        title: "sint hic doloribus consequatur eos non id",
        body: "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
      },
      {
        userId: 8,
        id: 73,
        title: "consequuntur deleniti eos quia temporibus ab aliquid at",
        body: "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
      },
]

const data: any = {
    usuarios: usersArray,
    posts: postsArray
}

// criei o array de posts fora por uma questão de organização da minha cabeça, porém poderia ser feito dentro, mas na minha opinião dificultaria o acesso, 
// pois teria que ser acessado por uma posição de vetor e não um propriedade de objeto, sendo assim iterações com arrays.prototypes poderiam retornar undefined nas primeiras iterações.
// tirando o fato de ser um array dentro de um array, o que não para mim não é muito interessante.

app.listen(3003, ()=>{
    console.log(`Salve da porta 3003`)
})

app.get("/usuarios", (req, res)=>{
    res.send(usersArray)
})

app.get("/posts", (req, res)=>{
    res.send(data.posts)
})

app.get("/posts/:userId", (req, res)=>{
    const userId = req.params.userId
    const postPorUsuario = postsArray.filter((post: post)=>{return post.userId === Number(userId)}).map((post: post)=>{return post})
    res.send(postPorUsuario.length > 0 ? postPorUsuario : "Não Há posts deste usuário" )
})