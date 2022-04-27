import Participant from "../../src/Model/Participant"
import { participantMock } from "./ParticipantMock"

export default class ParticipantDatabaseMock{
    getParticipation = async(): Promise<any> =>{
        let cont = 0
        let array: any[] = []
        if(cont === 0){
            cont = 1
            return array
        }else if(cont === 1) return participantMock
    }

    verifyByName = async (name: string, lastName: string): Promise<any> => {
        if(name === "Astrodev"){
            return ({ participantMock })
        }else{
            return false
        }
    }

    insert = async (input: Participant): Promise<Participant | null> => {
        return participantMock
    }

    delete = async (id: string): Promise<boolean> => {
        if(id === "001"){
            return (true)
        }else{
            return false
        }
    }
}