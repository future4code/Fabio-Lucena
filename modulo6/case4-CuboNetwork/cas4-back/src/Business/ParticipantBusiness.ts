import CustomError from "../Error/CustomError";
import Participant, { participantDTO } from "../Model/Participant";
import { IdGenerator } from "../Services/IdGenerator";
import ParticipantRepository from "./ParticipantRepository";

export default class ParticipantBusiness{
    private participantDatabase: ParticipantRepository
    private idGenerator: IdGenerator

    constructor(
        participantImplementation: ParticipantRepository
    ){
        this.participantDatabase = participantImplementation
        this.idGenerator = new IdGenerator()
    }

    getParticipation = async()=>{
        try{
            const result = await this.participantDatabase.getParticipation()

            if(!result){
                throw new CustomError(400, "Não há participantes");
                
            }

            return result
        }catch(error: any){
            throw new CustomError(error.statusCode, error.message)
        }
    }

    insertParticipant= async(input: participantDTO): Promise<any> =>{
        try {
            if(!input.firstName || !input.lastName || !input.participation){
                throw new CustomError(422, "Missing input")
            }

            // const verify: any = await this.participantDatabase.verifyByName(input.firstName, input.lastName)

            const id: string = this.idGenerator.generate()

            const participantInput = {
                id: id,
                firstName: input.firstName,
                lastName: input.lastName,
                participation: input.participation
            }

            const newParticipant = Participant.toParticipantModel(participantInput)

            await this.participantDatabase.insert(newParticipant)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}