import express, { Express } from 'express'
import cors from 'cors'
import knex from "knex";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import connection from "../connection";
import { body, bodyTask } from '../types';

export const endpoints = () => {

    const app: Express = express();

    app.use(express.json());
    app.use(cors());

    const usuarioPorId = async (id: string): Promise<any> => {
        const result = await connection.raw(`
      SELECT * FROM users WHERE id = '${id}'
    `)
        return result[0][0]
    }

    const responsibleUser = async (): Promise<any> => {
        const result = await connection.raw(`
        SELECT users.id, nickname, TodoListResponsible.task_id FROM users JOIN TodoListResponsible ON users.id = TodoListResponsible.responsible_user_id JOIN ToDos ON TodoListResponsible.task_id = ToDos.id;
    `)
        return result[0]
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
            res.status(500).send(error.message)
        }
    })

    // Desafio 8, busca
    app.get("/user", async (req, res) => {
        try {
            const searchKey = req.query.query

            if (searchKey === "") {
                throw new Error("Não foi enviada uma chave de busca")
            }

            const allUsers = await connection("users")
                .select('id', 'nickname', 'email')

            const users = allUsers.filter((item) => {
                return item.nickname.includes(searchKey) || item.email.includes(searchKey)
            }).map((item) => {
                return item.nickname, 
                item.email           
            })

            res.status(200).send({ users })
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    })

    //Desafio 6
    app.get("/user/all", async (req, res) => {
        try {
            const users = await connection("users")
                .select('id', 'nickname')

            res.status(200).send({ users })
        } catch (error: any) {
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
            res.status(200).send({ usuario })
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    })

    app.put("/user/edit/:id", async (req, res) => {
        try {
            const userId = req.params.id

            if ((!req.body.name || req.body.name === "") && (req.body.nickname !== "")) {
                await connection("users")
                    .update({ nickname: req.body.nickname })
                    .where({ id: userId })
            } else if ((!req.body.nickname || req.body.nickname === "") && (req.body.name !== "")) {
                await connection("users")
                    .update({ name: req.body.name })
                    .where({ id: userId })
            } else {
                throw new Error("Favor preencher os campos que você deseja editar")
            }

            const usuario = await usuarioPorId(userId)

            res.status(200).send("sucesso")

        } catch (error: any) {
            res.status(500).send(error.message)
        }
    })

    app.post("/task", async (req, res) => {
        try {

            let data = req.body.limitDate.split("/")

            const body: bodyTask = {
                id: Date.now().toString(),
                title: req.body.title,
                description: req.body.description,
                limitDate: `${data[2]}-${data[1]}-${data[0]}`,
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
                .insert([{ id: body.id, title: body.title, description: body.description, limitDate: body.limitDate, creatorUserId: body.creatorUserId }])

            res.status(200).send("sucesso!")

        } catch (error: any) {
            res.status(500).send(error.message)
        }
    })

    app.get("/task/:id", async (req, res) => {
        try {
            const taskId: any = req.params.id

            const tarefas = await connection("ToDos")
                .select("users.id as creatorUserId", 'nickname as creatorNickname', 'ToDos.id as taskId', 'title', 'description', 'limitDate', 'status',)
                .from('users')
                .join('ToDos', 'users.id', '=', 'ToDos.creatorUserId')

            //Falta pegar os dados do criador

            const tarefaEscolhida = tarefas.filter((item) => {
                return item.taskId === taskId
            }).map((item) => item)


            if (tarefas.length <= 0) {
                throw new Error("Tarefa não encontrada")
            }

            res.status(200).send({ tarefaEscolhida })
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    })

    //Desafio 9
    app.post("/task/responsible", async (req, res) => {
        try {
            const taskId = req.body.task_id
            const responsibleUser = req.body.responsible_user_id

            if (taskId === "") {
                throw new Error("Favor preencha todos os campos necessários!")
            }

            if (responsibleUser === "") {
                throw new Error("Favor preencha todos os campos necessários!")
            }

            await connection("TodoListResponsible")
                .insert({ task_id: taskId, responsible_user_id: responsibleUser })

            res.status(500).send("sucesso!")

        } catch (error: any) {
            res.status(error.code).send(error.message)
        }
    })

    //Desafio 10
    app.get("/task/:id/responsible", async (req, res) => {
        try{
            const taskId = req.params.id

            if (taskId === "") {
                throw new Error("Não foi enviada uma chave de busca")
            }

            const usersList = await responsibleUser()
            const users = usersList.filter((item: any) => {
                return item.task_id === taskId
            }).map((item: any) => {
                return item          
            })
            res.status(500).send({users})
        }catch(error: any){
            res.status(error.code).send(error.message)
        }
    })

    // Desafio 7
    app.get("/task", async (req, res) => {
        try {
            const creatorUserId: any = req.query.creatorUserId

            if (!creatorUserId || creatorUserId === "") {
                throw new Error("Não foi enviado um id de usuário")
            }

            const tarefas = await connection("ToDos")
                .select('ToDos.id as taskId', 'title', 'description', 'limitDate', 'users.id as creatorUserId', 'status', 'nickname as creatorUserNickname')
                .from('users')
                .join('ToDos', 'users.id', '=', 'ToDos.creatorUserId')


            const tasks = tarefas.filter((item) => {
                return item.creatorUserId === creatorUserId
            }).map((item) => {
                let date = item.limitDate
                let dateTime = new Date(date)
                let options: any = { year: 'numeric', month: 'numeric', day: 'numeric' }

                let result = dateTime.toLocaleDateString('pt', options)

                item.limitDate = result

                return item
            })


            if (tarefas.length <= 0) {
                throw new Error("Tarefa não encontrada")
            }
            res.status(200).send({ tasks })
        } catch (error: any) {
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

}