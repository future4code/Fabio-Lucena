import axios from "axios";
import { base_url } from "./base_url"

//Exercicio 3 
type user = {
    id: string;
    name: string;
    email: string;
}
//a) Creio que não, pois neste caso o retorno da função será com objetos com o mesmo formato. Sendo assim o tipo de retorno será o mesmo.
//b) Pois o retorno das Promise será um vetor com os resultados, sendo assim nem sempre retornará "apenas o que queremos", mas pode sim, retornar um vetor com diversos objetos e diversos resultados.
//Já fazendo o map, podemos retornar apenas um objeto com as propriedades que queremos, o que é totalmente preferível.

//Exercicio 1
// a) EndPoint "/subscribers"
// b) com Promise:<any[]>
const getAllSubscribers = async (): Promise<user[]> => {
    // Exercício 2
    //a) Na função nomeada, precisamos declarar async antes da sintaxe function, para dizer que a mesma será assíncrona, já na arrow function precisamos declarar o async antes do argumento 
    //da função para fazer o mesmo.
    const result = await axios.get(`${base_url}/subscribers`)
    return result.data.map((item: any) => {
        return {
            id: item.id,
            name: item.name,
            email: item.email
        }
    })
}

type news = {
    title: string
    content: string
    date: number
}

//Exercicio 4
//a) Será VOID, pois ela criará uma nova notícia, mas não retornará nada.
const createNews = async (title: string, content: string, date: number): Promise<void> => {
    const body = {
        title: title,
        content: content,
        date: date
    }
    await axios.put(`${base_url}/news`, body)
}

const newNews: news = {
    title: "Carinha das casas Bahia, passou dessa pra uma melhor",
    content: "E foi numa explosão de ofertas",
    date: Date.now()
}

//Exercicio 5
// const sendNotificationsForAll = async (users: user[], message: string): Promise<void> => {
//     try {
//         for (let i = 0; i <= users.length; i++) {
//             const body = {
//                 subscriberId: users[i].id,
//                 message: message
//             }
//             await axios.post(`${base_url}/notifications`, body)
//         }
//         console.log("Todas as mensagens enviadas!");
//     } catch (error: any) {
//         console.log(error.message);
//     }
// }

// Exercicio 6
const sendNotificationsForAll = async (users: user[], message: string): Promise<void> => {
    try {
        const messages = users.map((item) => {
            const body = {
                subscriberId: item.id,
                message: message
            }
            return axios.post(`${base_url}/notifications`, body)
        })
        await Promise.all(messages)

    } catch (error: any) {

    }
}

const main = async (): Promise<void> => {
    try {

        await createNews(newNews.title, newNews.content, newNews.date)

        const subscribers = await getAllSubscribers()
        console.log(subscribers)

        await sendNotificationsForAll(subscribers, "Acompanhe as últimas notícidas!")
        console.log("Todas as mensagens enviadas!")
    } catch (error: any) {
        console.log(error.message)
    }
}

main()