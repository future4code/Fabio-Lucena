import express from "express";
import CompetitionController from "../controller/CompetitionController";
import JavelinController from "../controller/JavelinController";

export const javelinRouter = express.Router();

const javelinController = new JavelinController();

// javelinRouter.post("/create", javelinController.createComptetition)
javelinRouter.post("/:id", javelinController.insertJavelinThrow)
// userRouter.post("/login", userController.login);