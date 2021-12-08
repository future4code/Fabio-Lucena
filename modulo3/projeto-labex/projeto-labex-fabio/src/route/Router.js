import React from "react";
import HomePage from "../Pages/HomePage"
import AdminHomePage from "../Pages/AdminHomePage"
import ApplicattionFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage"
import ListTripsPage from "../Pages/ListTripsPage"
import LoginPage from "../Pages/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage"
import CreateTripPage from "../Pages/CreateTripPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Switch foi substituido por Routes



export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />

        <Route exact path={"/login"} element={<LoginPage />} />

        <Route exact path={"/trips/list"} element={<ListTripsPage />} />

        <Route exact path={"/admin/trips/list"} element={<AdminHomePage />} />
        
        <Route exact path={"/trips/application"} element={<ApplicattionFormPage />} />
        
        <Route exact path={"/admin/trips/:id"} element={<TripDetailsPage />} />

        <Route exact path={"/admin/trips/create"} element={<CreateTripPage />} />

      </Routes>
    </BrowserRouter>
  );
}
