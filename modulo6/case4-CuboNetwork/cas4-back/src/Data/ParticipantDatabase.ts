import ParticipantRepository from "../Business/ParticipantRepository";
import Participant from "../Model/Participant";
import BaseDatabase from "./BaseDatabase";

export default class ParticipantDatabase extends BaseDatabase implements ParticipantRepository {

    getParticipation = async (): Promise<any> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .from("Case4_Participant")
                .orderBy("participation", "desc")
                

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    verifyByName = async (name: string, lastName: string): Promise<any> => {
        try {
            const result = await this.getConnection().raw(`
            SELECT * FROM Case4_Participant WHERE firstName = "${name}" AND lastName = "${lastName}";
            `)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public insert = async (input: Participant): Promise<Participant | null> => {
        try {
            await this.getConnection()
                .insert({
                    id: input.getId(),
                    firstName: input.getFirstName(),
                    lastName: input.getLastName(),
                    participation: input.getParticipation()
                })
                .into("Case4_Participant")

            return input
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public delete = async (id: string): Promise<boolean> => {
        try {
            await this.getConnection().raw(`
            DELETE FROM Case4_Participant WHERE id = "${id}";
            `)

            return true
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}