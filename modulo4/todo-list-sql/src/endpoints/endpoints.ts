import express, {Express} from 'express'
import cors from 'cors'
import { body } from '../types';
import knex from "knex";
import connection from "../connection";


const app: Express = express();

app.use(express.json());
app.use(cors());



export const criaUsuario = () =>{
    app.post("/user", async (req, res) => {
        try {
            const body: body = {
                id: Date.now().toString(),
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            }
    
            if(!req.body.name || req.body.name === ""){
                throw new Error("Favor preencha todos os campos necessários!")
            }
    
            if(!req.body.nickname || req.body.nickname === ""){
                throw new Error("Favor preencha todos os campos necessários!")
            }
    
            if(!req.body.email || req.body.email === ""){
                throw new Error("Favor preencha todos os campos necessários!") 
            }
    
            await connection("users")
                .insert([{ id: body.id, name: body.name, nickname: body.nickname, email: body.email }])
    
            res.status(200).send("sucesso!")
    
        } catch (error: any) {
            console.log(error.message)
            res.status(500).send("Unexpected error")
        }
    
    })
}