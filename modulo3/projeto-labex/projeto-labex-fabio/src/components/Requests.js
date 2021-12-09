import react from "react"
import axios from "axios"
import { URL_BASE } from "./UrlBase"
import { GoToAdminHomePage } from "../route/RouteFunctions"

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

// export const GetTripDetail = (id, token) => {
//     axios.post(`${URL_BASE}/trip/:id`, 
//     {
//         headers: {
//           auth: "application/json"
//         }
//       })
//         .then((response) => {
//             alert("Login Realizado com sucesso!")
//             localStorage.setItem("token", response.data.token)
//             GoToAdminHomePage(navigate)
//         })
//         .catch((err) => alert(err))
// }