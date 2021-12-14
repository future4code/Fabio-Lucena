import React from "react"
import axios from "axios"
import { URL_BASE } from "./urlBase"
import { GoToFeedPage } from "../Routes/RouteFunctions"

export const Login = (body, navigate) => {
    axios.post(URL_BASE + "/users/login", body,
        {
            headers: {
                ContentType: "application/json"
            }
        }
    ).then((response)=> {
        alert("Login realizado com sucesso!")
        localStorage.setItem("token", response.data.token)
        GoToFeedPage(navigate)
    }).catch((err) => alert(err.response.message))

}

export const Signup = (body, navigate) => {
    axios.post(URL_BASE + "/users/signup", body,
        {
            headers: {
                ContentType: "application/json"
            }
        }
    ).then((response)=> {
        alert("Cadastro realizado com sucesso!")
        localStorage.setItem("token", response.data.token)
        GoToFeedPage(navigate)
    }).catch((err) => alert(err.response.message))

}

export const CreatePost = (body, navigate) => {
    axios.post(URL_BASE + "/posts", body,
        {
            headers: {
                ContentType: "application/json",
                Authorization: localStorage.getItem("token")
            }
        }
    ).then((response)=> {
        alert("Post criado com sucesso!")
        GoToFeedPage(navigate)
    }).catch((err) => alert(err.response.message))

}