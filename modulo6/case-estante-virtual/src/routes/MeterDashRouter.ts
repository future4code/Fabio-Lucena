import express from "express";
import CompetitionController from "../controller/CompetitionController";
import JavelinController from "../controller/JavelinController";
import MeterDashController from "../controller/MeterDashController";

export const meterDashRouter = express.Router();

const meterDashController = new MeterDashController();

meterDashRouter.post("/:id", meterDashController.insertMeterDash)
