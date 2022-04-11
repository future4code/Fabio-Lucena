import CompetitionRepository from "../business/CompetitionRepository";
import Competition from "../model/Competition";
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
                .where({ id })

            return Number(result[0].status)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public verifyCompetitionById = async (id: string): Promise<any> => {
        try {

            const result = await this.getConnection()
                .select("*")
                .from("Case1_Competitions")
                .where({ id })

            return result[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public endCompetition = async (id: string): Promise<void> => {
        try {

            await this.getConnection()
                .into("Case1_Competitions")
                .where({ id })
                .update({
                    status: false
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public meterDashRanking = async (id: string): Promise<any> => {
        try {

            const result = await this.getConnection().raw(`
            SELECT athlete, time, competition_id FROM Case1_Competitions RIGHT JOIN Case1_Dash ON Case1_Competitions.id = Case1_Dash.competition_id
            ORDER BY time;
            `)

            return result[0].filter((a: any) => { return a.competition_id === id }).map((a: any) => a)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public javelinRanking = async (id: string): Promise<any> => {
        try {

            const result = await this.getConnection().raw(`
            SELECT athlete, throw, competition_id FROM Case1_Competitions JOIN Case1_Javelin ON Case1_Competitions.id = Case1_Javelin.competition_id
            ORDER BY throw DESC;
            `)


            let result2: any[] = []

            result[0].forEach((item: any) => {
                var duplicated = result2.findIndex(redItem => {
                    return item.athlete == redItem.athlete;
                }) > -1;

                if (!duplicated) {
                    result2.push(item);
                }
            })
            return result2

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


}