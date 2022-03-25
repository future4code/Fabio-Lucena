import JavelinRepository from "../business/JavelinThrow/JavelinRepository";
import Javelin from "../model/Javelin";
import { BaseDatabase } from "./BaseDatabase";

export default class JavelinDatabase extends BaseDatabase implements JavelinRepository{
   
    public verifyCompetitionActive = async (id: string): Promise<any> => {
        try {
            
            const result = await this.getConnection()
            .select("*")
            .from("Case1_Competitions")
            .where({id})

            return result[0].status

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public insertJavelinThrow = async (input: Javelin): Promise<Javelin> => {
        try {
            await this.getConnection()
                .insert({
                    id: input.getId(),
                    athlete: input.getAthlete(),
                    throw: input.getDistance(),
                    competition_id: input.getCompetition_id()
                })
                .into("Case1_Javelin");

            return input

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public verifyThrows = async (id: string, athlete: string): Promise<any> => {
        try {
            
            const result = await this.getConnection()
            .select("*")
            .from("Case1_Javelin")
            .where({athlete})

            const attempts = result.filter((item: any)=>{
                return item.competition_id === id
            }).map((a: any)=> a)

            return attempts

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}