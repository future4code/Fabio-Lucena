import { CustomError } from "../error/CustomError";
import Competition, { CompetitionDTO, Modality } from "../model/Competition";
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

            Competition.stringToModality(input.modality)

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

    endCompetition = async (id: string) => {
        try {
            if (!id) {
                throw new CustomError(422, "Missin input")
            }

            const verifyId = await this.competitionDatabase.verifyCompetitionById(id)

            if (!verifyId) {
                throw new CustomError(400, "Competition not found")
            }

            await this.competitionDatabase.endCompetition(id)



        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    competitionRanking = async (id: string) => {
        try {
            if (!id) {
                throw new CustomError(422, "Missin input")
            }

            const modality = await this.competitionDatabase.verifyCompetitionById(id)

            if (modality.modality === "100M RASOS") {
                const ranking = await this.competitionDatabase.meterDashRanking(id)
                return ranking

            } else if (modality.modality === "LAN??AMENTO DE DARDOS") {
                const ranking = await this.competitionDatabase.javelinRanking(id)
                return ranking
            }else{
                throw new CustomError(400, "Competition not found")
            }

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

}