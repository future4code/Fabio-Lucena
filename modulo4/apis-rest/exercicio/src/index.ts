import express, { Express } from 'express'
import cors from 'cors'
import { users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("salve da quebrada!!")
})

// Exercicio 1: Deve se usar o método GET para pegar todas as informações do vetor de usuarios.
app.get("/users", (req, res) => {
    //Estou usando a entidade "users" que é o nome do array que está sendo retornado pelo método get
    res.send(users)
})

app.get("/users/type", (req, res) => {
    try {
        const typeZero: any = req.query.type
        // Passei os parâmetros via query params, pois como não é um id que posso mandar por path, é melhor recebê-los por query
        let type: string = typeZero.toUpperCase()
        console.log(type)
        console.log(typeof (type))

        if (type === 'NORMAL' || type === 'ADMIN') {
            const usersByType = users.filter((item: any) => {
                return item.type === type
            }).map((item: any) => { return item })
            console.log(usersByType)

            res.send(usersByType)
            // esta é a maneira que eu pensei para que os types sejam válidos
        } else {
            throw new Error("Types inválidos")
        }
    } catch (error: any) {
        res.send(error.message)
    }
})

app.get("/users/search", (req, res) => {
    try {
        const search: any = req.query.name
        // Passei os parâmetros via query params, pois como não é um id que posso mandar por path, é melhor recebê-los por query
        let valid: boolean = false
        console.log(search)

        const usersByName = users.filter((item: any) => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        }).map((item: any) => {

            return item
        })
        console.log(usersByName)

        usersByName.length > 0 ? valid = true : valid = false

        if (valid === true) {
            res.send(usersByName)
        } else {
            throw new Error("Nenum nome encontrado")
        }
        // esta é a maneira que eu pensei para que os types sejam válidos


    } catch (error: any) {
        res.send(error.message)
    }
})

app.post("/users/create", (req, res) => {
    //Mudando para PUT, da erro, pois não foi enviado um id, por isso não é muito útil para a função de criar, mas sim de editar.
    try {
        const body = {
            id: users.length + 1,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type.toUpperCase(),
            age: Number(req.body.age)
        }
               
        users.push(body)
        res.send(users)
    }catch(error: any){
        res.send(error.message)
    }

})

