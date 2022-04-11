import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import CompetitionDatabase from "../data/CompetitionDatabase";
import { CompetitionDTO } from "../model/Competition";


export default class CompetitionController {
    private competitionBusiness: CompetitionBusiness

    constructor() {
        this.competitionBusiness = new CompetitionBusiness(new CompetitionDatabase())
    }

    createComptetition = async (req: Request, res: Response) => {
        const input: CompetitionDTO = {
            name: req.body.name,
            modality: req.body.modality.toUpperCase()
        }
        try {

            await this.competitionBusiness.createCompetition(input)

            res.status(200).send("Competição criada com sucesso!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }

    }

    endCompetition = async (req: Request, res: Response) => {
        const id = req.body.id
        try {
            await this.competitionBusiness.endCompetition(id)

            res.status(200).send("Competição encerrada!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }

    competitionRanking = async (req: Request, res: Response) => {
        const id = req.params.id
        try {
            const ranking = await this.competitionBusiness.competitionRanking(id)

            res.status(200).send({ ranking })
        } catch (error) {

        }
    }

}