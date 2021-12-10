import react from "react"
import axios from "axios"
import { URL_BASE } from "./UrlBase"
import { GoToAdminHomePage } from "../route/RouteFunctions"
import { useEffect } from "react/cjs/react.development"

export const ApplyToTrip = (url, body, Id) => {
  axios.post(`${url}/trips/${Id}/apply`, body)
    .then(() => {
      alert("Aplicação enviada com sucesso!")
    })
    .catch((err) => alert(err.response.message))
}

export const Login = (body, navigate) => {
  axios.post(`${URL_BASE}/login`, body,
    {
      headers: {
        ContentType: "application/json"
      }
    })
    .then((response) => {
      alert("Login Realizado com sucesso!")
      localStorage.setItem("token", response.data.token)
      GoToAdminHomePage(navigate)
    })
    .catch((err) => alert(err))
}

export const DecideCandidate = (body, tripId, candidateId, GetTrips2, mensagem) => {
  const token = localStorage.getItem("token")
  const url = `${URL_BASE}/trips/${tripId}/candidates/${candidateId}/decide`
  console.log(url)
  axios.put(`${URL_BASE}/trips/${tripId}/candidates/${candidateId}/decide`, body,
    {
      headers: {
        ContentType: "application/json",
        auth: `${token}`
      }

    })
    .then((response) => {
      alert(mensagem, response)
      GetTrips2()


    })
    .catch((err) => alert("deu ruim!", err))
}

export const DeleteTrip = (tripId, GetTrips, mensagem) => {
  const token = localStorage.getItem("token")
 
  axios.delete(`${URL_BASE}/trips/${tripId}`,
    {
      headers: {
        ContentType: "application/json",
        auth: `${token}`
      }

    })
    .then((response) => {
      alert(mensagem, response)
      GetTrips()


    })
    .catch((err) => alert("deu ruim!", err))
}

export const CreateTrip = (body, mensagem) => {
  const token = localStorage.getItem("token")
 
  axios.post(`${URL_BASE}/trips`, body,
    {
      headers: {
        ContentType: "application/json",
        auth: `${token}`
      }

    })
    .then((response) => {
      alert(mensagem, response)
    })
    .catch((err) => alert("deu ruim!", err))
}



