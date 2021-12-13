import React from "react"
import axios from "axios"
import { URL_BASE } from "./urlBase"

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
    }).catch((err) => alert(err.response.message))

}