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

export const CreatePostVote = (id, body, GetPosts, navigate) => {
    axios.post(`${URL_BASE}/posts/${id}/votes`, body, 
        {
            headers: {
                ContentType: "application/json",
                Authorization: localStorage.getItem("token")
            }
        }
    ).then((response)=> {
        GetPosts()
    }).catch((err) => alert(err.response.message))

}

export const DeletePostVote = (id, getPost) => {
    axios.delete(`${URL_BASE}/posts/${id}/votes`, 
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then((response)=> {
        getPost()
    }).catch((err) => alert(err.response.message))

}

export const CreateComment = (id, body) => {
    axios.post((URL_BASE + "/posts/"+id+"/comments"), body,
        {
            headers: {
                ContentType: "application/json",
                Authorization: localStorage.getItem("token")
            }
        }
    ).then((response)=> {
        alert("Comentário criado com sucesso!")
        
    }).catch((err) => alert(err.response.message))

}

export const CreateCommentVote = (id, body, GetPosts) => {
    axios.post(`${URL_BASE}/comments/${id}/votes`, body, 
        {
            headers: {
                ContentType: "application/json",
                Authorization: localStorage.getItem("token")
            }
        }
    ).then((response)=> {
            GetPosts()
    }).catch((err) => alert(err.response.message))

}

export const DeleteCommentVote = (id, getPost) => {
    axios.delete(`${URL_BASE}/comments/${id}/votes`, 
        {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
    ).then((response)=> {
       
        getPost()
    }).catch((err) => alert(err.response.message))

}