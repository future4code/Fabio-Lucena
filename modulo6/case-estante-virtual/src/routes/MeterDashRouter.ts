import express from "express";
import MeterDashController from "../controller/MeterDashController";

export const meterDashRouter = express.Router();

const meterDashController = new MeterDashController();

meterDashRouter.post("/:id", meterDashController.insertMeterDash)
