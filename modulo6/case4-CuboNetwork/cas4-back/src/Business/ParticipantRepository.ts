import Participant from "../Model/Participant"

export default interface ParticipantRepository{
    verifyByName(name: string, lastName: string): Promise<void>
    insert(input: Participant): Promise<Participant | null>

}