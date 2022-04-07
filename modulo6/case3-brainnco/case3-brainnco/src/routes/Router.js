import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../Pages/Mega-sena/HomePage"

 const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;