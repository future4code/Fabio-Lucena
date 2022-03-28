import Competition from "../../src/model/Competition";
import { competitionMock, competitionMock2 } from "./competitionMock";

export default class CompetitionDatabaseMock {
    public createCompetition = async (competition: Competition): Promise<Competition> => {
        return competitionMock
    }

    public verifyCompetitionActive = async (id: string): Promise<any> => {
        if (id === "id_mockado") {
            return 1
        } else if (id === "id_mockado2") {
            return 0
        }
    }

    public verifyCompetitionById = async (id: string): Promise<any> => {
        if (id === "id_mockado") {
            return competitionMock
        } else if (id === "id_mockado2") {
            return competitionMock2
        }else{
            return false
        }
    }

    public endCompetition = async (id: string): Promise<any> => { return "competição encerrada!" }

    public meterDashRanking = async (id: string): Promise<any> => { return "ranking 100m rasos" }

    public javelinRanking = async (id: string): Promise<any> => { return "ranking arremesso de dardos" }

}