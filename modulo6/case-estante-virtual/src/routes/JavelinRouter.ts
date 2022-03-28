import express from "express";
import JavelinController from "../controller/JavelinController";

export const javelinRouter = express.Router();

const javelinController = new JavelinController();

javelinRouter.post("/:id", javelinController.insertJavelinThrow)
