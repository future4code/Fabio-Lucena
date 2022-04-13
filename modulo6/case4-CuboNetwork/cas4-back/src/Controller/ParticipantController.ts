import { Request, Response } from "express";
import ParticipantBusiness from "../Business/ParticipantBusiness";
import ParticipantDatabase from "../Data/ParticipantDatabase";
import { participantDTO } from "../Model/Participant";

export default class ParticipantController{
    private participantBusiness: ParticipantBusiness

    constructor(){
        this.participantBusiness = new ParticipantBusiness(new ParticipantDatabase())
    }

    insertParticipant = async(req: Request, res: Response) =>{
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
}