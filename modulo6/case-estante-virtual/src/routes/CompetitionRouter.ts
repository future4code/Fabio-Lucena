import express from "express";
import CompetitionController from "../controller/CompetitionController";

export const competitionRouter = express.Router();

const competitionController = new CompetitionController();

competitionRouter.post("/create", competitionController.createComptetition)
competitionRouter.put("/end", competitionController.endCompetition);