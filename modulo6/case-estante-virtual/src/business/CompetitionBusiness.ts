import { CustomError } from "../error/CustomError";
import Competition, { CompetitionDTO } from "../model/Competition";
import { JavelinDTO } from "../model/Javelin";
import MeterDash from "../model/MeterDash";
import MetreDash, { meterDashDTO } from "../model/MeterDash";
import { IdGenerator } from "../services/IdGenerator";
import CompetitionRepository from "./CompetitionRepository";

export default class CompetitionBusiness {
    private competitionDatabase: CompetitionRepository
    private idGenerator: IdGenerator

    constructor(
        competitionImplementation: CompetitionRepository
    ) {
        this.competitionDatabase = competitionImplementation
        this.idGenerator = new IdGenerator()
    }

    createCompetition = async (input: CompetitionDTO) => {
        try {
            if (!input.name || !input.modality) {
                throw new CustomError(422, "Missin input")
            }

            const id: string = this.idGenerator.generate()

            const competitionInput = {
                id: id,
                name: input.name,
                modality: Competition.stringToModality(input.modality),
                status: true,
            }

            const newCompetition = Competition.toCompetitionModel(competitionInput)

            await this.competitionDatabase.createCompetition(newCompetition)


        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    insertMeterDash = async (input: meterDashDTO) => {
        try {
            if (!input.athlete || !input.time || !input.competition_id) {
                throw new CustomError(422, "Missin input")
            }
           
            const active = await this.competitionDatabase.verifyCompetitionActive(input.competition_id)
            
            if (!active || active === 0) {
                throw new CustomError(400, "A competição já foi encerrada")
            }

            const id: string = this.idGenerator.generate()

            const dashInput = {
                id: id,
                athlete: input.athlete,
                time: input.time,
                competition_id: input.competition_id
            }

            const newDash = MeterDash.toMeterDashModel(dashInput)

            await this.competitionDatabase.insertMeterDash(newDash)

            const message = "Atleta e tempo adicionados com sucesso!"

            return message

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    // insertJavelinThrow = async (input: JavelinDTO) => {
    //     try {
    //         if (!input.athlete || !input.distance || !input.competition_id) {
    //             throw new CustomError(422, "Missin input")
    //         }
           
    //         const active = await this.competitionDatabase.verifyCompetitionActive(input.competition_id)
            
    //         if (!active || active === 0) {
    //             throw new CustomError(400, "A competição já foi encerrada")
    //         }

    //         const id: string = this.idGenerator.generate()

    //         const dashInput = {
    //             id: id,
    //             athlete: input.athlete,
    //             distance: input.distance,
    //             competition_id: input.competition_id
    //         }

    //         const newDash = MeterDash.toMetreDashModel(dashInput)

    //         await this.competitionDatabase.insertMeterDash(newDash)

    //         const message = "Atleta e tempo adicionados com sucesso!"

    //         return message

    //     } catch (error: any) {
    //         throw new CustomError(error.statusCode, error.message)
    //     }
    // }

}