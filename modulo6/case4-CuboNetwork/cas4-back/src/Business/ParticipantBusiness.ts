import CustomError from "../Error/CustomError";
import Participant, { participantDTO } from "../Model/Participant";
import { IdGenerator } from "../Services/IdGenerator";
import ParticipantRepository from "./ParticipantRepository";

export default class ParticipantBusiness {
    private participantDatabase: ParticipantRepository
    private idGenerator: IdGenerator

    constructor(
        participantImplementation: ParticipantRepository
    ) {
        this.participantDatabase = participantImplementation
        this.idGenerator = new IdGenerator()
    }

    getParticipation = async () => {
        try {
            const result = await this.participantDatabase.getParticipation()

            if (!result) {
                throw new CustomError(400, "Não há participantes");

            }

            return result
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    insertParticipant = async (input: participantDTO): Promise<any> => {
        try {
            if (!input.firstName || !input.lastName || !input.participation) {
                throw new CustomError(422, "Missing input")
            }

            const verify: any = await this.participantDatabase.verifyByName(input.firstName, input.lastName)

            if (verify.length > 0) {
                throw new CustomError(422, "Nome já existente")
            }

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

    deleteParticipant = async (id: string): Promise<any> => {
        try {
            if (!id) {
                throw new CustomError(422, "Missing input")
            }

            const del = await this.participantDatabase.delete(id)

            if (del === false) {
                throw new CustomError(400, "Pessoa não encontrada")
            }

            return "Participante deletado com sucesso!"

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}