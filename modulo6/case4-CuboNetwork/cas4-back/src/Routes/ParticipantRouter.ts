import express from "express";
import ParticipantController from "../Controller/ParticipantController";

export const participantRouter = express.Router()

const participantController = new ParticipantController()

participantRouter.post("/add", participantController.insertParticipant)