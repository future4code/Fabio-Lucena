import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../Pages/FeedPage/FeedPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";

export const Router = () => {
    return(
        <BrowserRouter>

            <Routes>
                <Route exact path={"/"} element={<LoginPage />} />

                <Route exact path={"/FeedPage"} element={<FeedPage />} />

                <Route exact path={"/Signup"} element={<SignupPage />} />

            </Routes>
        </BrowserRouter>
    )
}