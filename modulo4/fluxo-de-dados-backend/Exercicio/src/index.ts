import express from "express";
import cors from "cors"
import { produtos } from "./data";
import { arrayBuffer } from "stream/consumers";

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("salve quebrada!")
    console.log(Date.now().toString())
})

app.get("/test", (req, res) => {
    res.send("a API ta funfando!")
})

app.get("/products", (req, res) => {
    res.send(produtos)
})

app.post("/create-product", (req, res) => {
    try {
        const body: any = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price
        }

        if (!req.body.name || !req.body.price) {
            throw new Error("Campos necessários para a criação de um novo produto")
        }

        if (typeof (req.body.name) !== 'string') {
            throw new Error("Nome não é uma string")
        }

        if (typeof (req.body.price) !== 'number') {
            throw new Error("preço não é um numero")
        }

        if (req.body.price <= 0) {
            throw new Error("preço não pode ser zero ou negativo")
        }

        for (let i = 0; i <= produtos.length - 1; i++) {
            if (produtos[i].name === req.body.name) {
                throw new Error("Produto já existe")
            }
        }

        produtos.push(body)
        console.log(produtos)
        res.send(produtos)

    } catch (error: any) {
        switch (error.message) {
            case "Campos necessários para a criação de um novo produto":
                res.status(422)
                break
            case "Produto já existe":
                res.status(409)
                break
            default:
                res.status(500)

        }
        res.send(error.message)
    }

})

app.put("/products/edit-price/:id", (req, res) => {

    const productId: string = req.params.id
    let newPrice = req.body.newPrice
    let find: boolean = false
    try {

        if (!productId) {
            throw new Error("Id do produto não recebido")
        }

        if (!newPrice) {
            throw new Error("Campos necessários para a edição do produto")
        }

        if (typeof (newPrice) !== 'number') {
            throw new Error("Preço deve ser um número")
        }

        if (newPrice <= 0) {
            throw new Error("Preço não pode ser negativo")
        }

        for (let i = 0; i <= produtos.length - 1; i++) {
            if (productId === produtos[i].id) {
                produtos[i].price = Number(newPrice)
                console.log(produtos)
                find = true
            }
        }

        if (find === false) {
            throw new Error("Produto não existe")
        }


        res.send(produtos)
    } catch (error: any) {
        switch (error.message) {
            case "Id do produto não recebido":
                res.status(404)
                break
            case "Campos necessários para a edição do produto":
                res.status(422)
                break
            case "Preço deve ser um número":
                res.status(422)
                break
            case "Preço não pode ser negativo":
                res.status(422)
                break
            default:
                res.status(500)

        }
        res.send(error.message)
    }
})

app.delete("/products", (req, res) => {
    try {
        const id = req.query.id
        let find: boolean = false

        if(!id){
            throw new Error("Id não enviado")
        }

        for (let i = 0; i <= produtos.length - 1; i++) {
            if (produtos[i].id === id) {
                produtos.splice(i, 1)
                console.log(produtos)
            }
        }

        if (find === false) {
            throw new Error("Produto não encontrado")
        }

        res.send(produtos)


    } catch (error: any) {
        switch (error.message) {
            case "Id não enviado":
                res.status(404)
                break
            case "Produto não encontrado":
                res.status(404)
                break
            default:
                res.status(500)

        }
        res.send(error.message)
    }
})

