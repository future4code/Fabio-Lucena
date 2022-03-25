import Javelin from "../../model/Javelin"

export default interface JavelinRepository{
    verifyCompetitionActive (id: string): Promise<any>
    insertJavelinThrow (input: Javelin): Promise<Javelin>
    verifyThrows (id: string, athlete: string): Promise<any>
}