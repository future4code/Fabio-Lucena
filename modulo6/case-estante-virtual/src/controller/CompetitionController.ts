import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import CompetitionDatabase from "../data/CompetitionDatabase";
import { CompetitionDTO } from "../model/Competition";
import { JavelinDTO } from "../model/Javelin";
import { meterDashDTO } from "../model/MeterDash";

// const competitionBusiness = new (CompetitionBusiness)

export default class CompetitionController {
    private competitionBusiness: CompetitionBusiness

    constructor() {
        this.competitionBusiness = new CompetitionBusiness(new CompetitionDatabase())
    }

    createComptetition = async (req: Request, res: Response) => {
        const input: CompetitionDTO = {
            name: req.body.name,
            modality: req.body.modality
        }
        try {

            await this.competitionBusiness.createCompetition(input)

            res.status(200).send("Competição criada com sucesso!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }

    }

    insertMeterDash = async (req: Request, res: Response) => {
        const input: meterDashDTO = {
            athlete: req.body.athlete,
            time: req.body.time,
            competition_id: req.params.id
        }

        try {

            const message = await this.competitionBusiness.insertMeterDash(input)

            res.status(200).send({ message })

        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }

  

}