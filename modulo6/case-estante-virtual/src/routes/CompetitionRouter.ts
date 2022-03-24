import express from "express";
import CompetitionController from "../controller/CompetitionController";

export const competitionRouter = express.Router();

const competitionController = new CompetitionController();

competitionRouter.post("/create", competitionController.createComptetition)
competitionRouter.post("/meter/:id", competitionController.insertMeterDash)
// userRouter.post("/login", userController.login);