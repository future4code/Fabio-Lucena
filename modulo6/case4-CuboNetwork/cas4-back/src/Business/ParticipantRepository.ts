import Participant from "../Model/Participant"

export default interface ParticipantRepository{
    getParticipation(): Promise<any>
    verifyByName(name: string, lastName: string): Promise<void>
    insert(input: Participant): Promise<Participant | null>
    delete(id: string): Promise<boolean>

}