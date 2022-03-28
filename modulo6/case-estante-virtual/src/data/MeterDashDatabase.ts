import MeterDashRepository from "../business/MeterDash/MeterDashRepository";
import MeterDash from "../model/MeterDash";
import { BaseDatabase } from "./BaseDatabase";

export default class MeterDashDatabase extends BaseDatabase implements MeterDashRepository {
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

    public insertMeterDash = async (input: MeterDash): Promise<MeterDash> => {
        try {
            await this.getConnection()
                .insert({
                    id: input.getId(),
                    athlete: input.getAthlete(),
                    time: input.getTime(),
                    competition_id: input.getCompetition_id()
                })
                .into("Case1_Dash");

            return input

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}