import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/FeedPage/FeedPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export const Router = () => {
    return(
        <BrowserRouter>

            <Routes>
                <Route exact path={"/"} element={<LoginPage />} />

                <Route exact path={"/HomePage"} element={<HomePage />} />

            </Routes>
        </BrowserRouter>
    )
}