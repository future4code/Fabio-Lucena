import { Request, Response } from "express";
import ParticipantBusiness from "../Business/ParticipantBusiness";
import ParticipantDatabase from "../Data/ParticipantDatabase";
import { participantDTO } from "../Model/Participant";

export default class ParticipantController {
    private participantBusiness: ParticipantBusiness

    constructor() {
        this.participantBusiness = new ParticipantBusiness(new ParticipantDatabase())
    }

    getParticipation = async (req: Request, res: Response) => {
        try {
            const result = await this.participantBusiness.getParticipation()

            res.status(200).send({ participantes: result })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }

    insertParticipant = async (req: Request, res: Response) => {
        const input: participantDTO = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            participation: req.body.participation
        }
        try {
            await this.participantBusiness.insertParticipant(input)

            res.status(200).send("Participante incerido com sucesso!")

        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }

    deleteParticipant = async (req: Request, res: Response) => {
        const input = req.params.id

        try {
            const message = await this.participantBusiness.deleteParticipant(input)

            res.status(200).send({ message })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
}