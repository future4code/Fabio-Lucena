import express, { Express } from 'express'
import cors from 'cors'
import knex from "knex";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import connection from "./connection";
import { criaUsuario } from './endpoints/endpoints';
import { body, bodyTask } from './types';

const app: Express = express();

app.use(express.json());
app.use(cors());

const usuarioPorId = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM users WHERE id = '${id}'
    `)
    return result[0][0]
}

app.post("/user", async (req, res) => {
    try {
        const body: body = {
            id: Date.now().toString(),
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        if (!req.body.name || req.body.name === "") {
            throw new Error("Favor preencha todos os campos necessários!")
        }

        if (!req.body.nickname || req.body.nickname === "") {
            throw new Error("Favor preencha todos os campos necessários!")
        }

        if (!req.body.email || req.body.email === "") {
            throw new Error("Favor preencha todos os campos necessários!")
        }

        await connection("users")
            .insert([{ id: body.id, name: body.name, nickname: body.nickname, email: body.email }])

        res.status(200).send("sucesso!")

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get("/user/:id", async (req, res) => {
    try {
        const userId: any = req.params.id

        const usuario = await connection("users")
            .select()
            .where({ id: userId })

        if (usuario.length <= 0) {
            throw new Error("Usuário não encontrado")
        }

        console.log(usuario)
        res.status(200).send({ usuario })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.put("/user/edit/:id", async (req, res) => {
    try {
        const userId = req.params.id

        if((!req.body.name || req.body.name === "") && (req.body.nickname !== "")){
            await connection("users")
            .update({nickname: req.body.nickname})
            .where({id: userId}) 
        }else if((!req.body.nickname || req.body.nickname === "") && (req.body.name !== "")){
            await connection("users")
            .update({name: req.body.name}) 
            .where({id: userId}) 
        }else{
            throw new Error("Favor preencher os campos que você deseja editar")
        }

        const usuario = await usuarioPorId(userId)
        console.log(usuario)

        res.status(200).send("sucesso")

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.post("/task", async (req, res) => {
    try {

        let data = req.body.limitDate.split("/")


        console.log(data, `${data[2]}/${data[1]}/${data[0]}`);


        const body: bodyTask = {
            id: Date.now().toString(),
            title: req.body.title,
            description: req.body.description,
            limitDate: `${data[2]}/${data[1]}/${data[0]}`,
            creatorUserId: req.body.creatorUserId
        }

        if (req.body.title === "") {
            throw new Error("Favor preencha todos os campos necessários!")
        }

        if (req.body.description === "") {
            throw new Error("Favor preencha todos os campos necessários!")
        }

        if (req.body.limitDate === "") {
            throw new Error("Favor preencha todos os campos necessários!")
        }

        if (req.body.creatorUserId === "") {
            throw new Error("Favor preencha todos os campos necessários!")
        }

        await connection("ToDos")
            .insert([{id: body.id, title: body.title, description: body.description, limitDate: body.limitDate, creatorUserId: body.creatorUserId }])

        res.status(200).send("sucesso!")

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.get("/task/:id", async (req, res) => {
    try {
        const taskId: any = req.params.id

        const tarefa = await connection("ToDos")
            .select()
            .where({ id: taskId })
            //Falta pegar os dados do criador

        if (tarefa.length <= 0) {
            throw new Error("Tarefa não encontrada")
        }

        console.log(tarefa)
        res.status(200).send({ tarefa })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});