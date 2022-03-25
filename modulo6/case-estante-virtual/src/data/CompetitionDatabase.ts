import CompetitionRepository from "../business/CompetitionRepository";
import Competition from "../model/Competition";
import MeterDash from "../model/MeterDash";
import { BaseDatabase } from "./BaseDatabase";

export default class CompetitionDatabase extends BaseDatabase implements CompetitionRepository {

    public createCompetition = async (competition: Competition): Promise<Competition> => {
        try {
            await this.getConnection()
                .insert({
                    id: competition.getId(),
                    name: competition.getName(),
                    modality: competition.getModality(),
                    status: competition.getStatus()
                })
                .into("Case1_Competitions");

            return competition

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    public verifyCompetitionActive = async (id: string): Promise<any> => {
        try {
            
            const result = await this.getConnection()
            .select("*")
            .from("Case1_Competitions")
            .where({id})

            return Number(result[0].status)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


}