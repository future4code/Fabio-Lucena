import express from "express";
import ParticipantController from "../Controller/ParticipantController";

export const participantRouter = express.Router()

const participantController = new ParticipantController()

participantRouter.get("/all", participantController.getParticipation)
participantRouter.post("/add", participantController.insertParticipant)
participantRouter.delete("/del/:id", participantController.deleteParticipant)
