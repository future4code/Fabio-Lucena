import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { contasUsuarios } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
    res.send(contasUsuarios)
})

app.get("/users/saldo", (req, res) => {
    const nome = req.query.nome
    const cpf = Number(req.query.cpf)

    function calculaSaldo(contas: any): any {
        let saldo = contas.saldo
        let total = contas && contas.debitos.reduce((a: number, b: number) => { return a + b }, 0)
        console.log(total)

        return saldo - total
    }

    const saldoAtt = contasUsuarios.filter((item: any) => {
        return item.nome === nome && item.cpf === cpf
    })
        .map((calculaSaldo))

    console.log(saldoAtt)
    res.send(`Seu saldo é de R$${saldoAtt}`)
})

app.post("/users/create", (req, res) => {
    try {
        const body = {
            nome: req.body.nome,
            cpf: Number(req.body.cpf),
            dataNascimento: req.body.dataNascimento,
            saldo: req.body.saldo,
            debitos: [],
            extrato: []
        }

        if (req.body.dataNascimento[2] !== "/" || req.body.dataNascimento[5] !== "/") {
            throw new Error("Insira a data de Nascimento no formato dd/mm/aaaa")
        }

        
        let a1 = body.dataNascimento[6]
        let a2 = body.dataNascimento[7]
        let a3 = body.dataNascimento[8]
        let a4 = body.dataNascimento[9]
        
        console.log(a1.concat(a2, a3, a4))

        let nascimento = Number(a1.concat(a2, a3, a4))

        if(2022 - nascimento < 18){
            throw new Error("Você precisa ser maior de 18 anos para abrir uma conta")
        }

        contasUsuarios.push(body)
        console.log(contasUsuarios)
        res.send(contasUsuarios)
    } catch (error: any) {
        res.send(error.message)
    }
})

app.put("/users/addSaldo", (req, res) => {
    const nome = req.body.nome
    const cpf = Number(req.body.cpf)
    const saldoAdd = Number(req.body.saldo)

    contasUsuarios.forEach((item) => {
        if (item.nome === nome && item.cpf === cpf) {
            item.saldo = item.saldo + saldoAdd
        }
    })

    const contaAtt = contasUsuarios.filter((item) => item.nome === nome && item.cpf === cpf).map((item) => item.saldo)

    console.log(contasUsuarios)
    console.log(contaAtt)

    res.send(`Saldo adicionado com sucesso, seu saldo agora é de R$${contaAtt}`)

})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});