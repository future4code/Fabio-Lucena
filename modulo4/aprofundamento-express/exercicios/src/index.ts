import express from "express";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

type afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

let afazeres: afazer[] = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 3,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
    {
        userId: 6,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
    },
    {
        userId: 8,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false
    },
    {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true
    },
    {
        userId: 1,
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false
    }
]

app.listen(3003, () => {
    // console.log("Salve da porta 3003")
})

app.get("/ping", (requ, res) => {
    res.send("Pong")
})


app.get("/todos", (req, res) => {
    const tipoAfazer = req.query.toDoType
    
    if (tipoAfazer === 'true') {
        const tarefasConcluidas = afazeres.filter((todo: any) => { return todo.completed === true }).map((todo) => todo)
       
        res.send({ tarefasConcluidas })

    } else {
        const tarefasIncompletas = afazeres.filter((todo: any) => { return todo.completed === false }).map((todo) => todo)
       
        res.send({ tarefasIncompletas })
    }
})

app.get("/todos/:userId", (req, res) => {
    const userId = Number(req.params.userId)
    
    
        const tarefasPorUsuario = afazeres.filter((todo: any) => { return todo.userId === userId }).map((todo) => todo)
        
        res.send({ tarefasPorUsuario })

    
})

app.post(("/todos/create"), (req, res)=>{
    const body: afazer = {
        userId: req.body.userId,
        id: afazeres.length + 1,
        title: req.body.title,
        completed: req.body.completed
    }

    let newList: any[]
    newList = [...afazeres, body]
    afazeres = newList
    
    res.send({ afazeres })
})

app.put("/todos/check", (req, res)=>{
    const body: any = {
        id: req.body.id,
        completed: req.body.completed   
    }

    afazeres.forEach((item)=>{
        if(item.id === body.id){
            item.completed = body.completed
        }
    })
   
    res.send({ afazeres })
})

app.delete("/todos/delete/:id", (req, res)=>{
    const id = Number(req.params.id)

    const toDoIndex = afazeres.findIndex((item)=>{
        return item.id === id
    })

    const newAfazeres: any[] = afazeres.splice(toDoIndex, 1)
    
    res.send({ afazeres })

} )

