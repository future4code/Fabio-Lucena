import ParticipantRepository from "../Business/ParticipantRepository";
import Participant from "../Model/Participant";
import BaseDatabase from "./BaseDatabase";

export default class ParticipantDatabase extends BaseDatabase implements ParticipantRepository{

    getParticipation = async(): Promise<any> => {
        try {
            const result = await this.getConnection()
            .select("*")
            .from("Case4_Participant")

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    verifyByName = async(name: string, lastName: string): Promise<void> =>{
        
    }

    public insert = async(input: Participant): Promise<Participant | null> =>{
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
}