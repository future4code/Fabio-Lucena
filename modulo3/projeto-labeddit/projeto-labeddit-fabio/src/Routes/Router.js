import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../Pages/FeedPage/FeedPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import PostPage from "../Pages/PostPage/PostPage"

export const Router = () => {
    return(
        <BrowserRouter>

            <Routes>
                <Route exact path={"/"} element={<LoginPage />} />

                <Route exact path={"/FeedPage"} element={<FeedPage />} />

                <Route exact path={"/Signup"} element={<SignupPage />} />

                <Route exact path={"/posts/:id/comments"} element={<PostPage />} />

            </Routes>
        </BrowserRouter>
    )
}