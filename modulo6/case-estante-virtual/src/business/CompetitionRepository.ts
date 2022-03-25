import Competition from "../model/Competition";
import MeterDash from "../model/MeterDash";

export default interface CompetitionRepository{
    createCompetition (competition: Competition): Promise<Competition>
    verifyCompetitionActive (id: string): Promise<any>
    verifyCompetitionById (id: string): Promise<any>
    endCompetition (id: string): Promise<void>
    meterDashRanking (id: string): Promise<any>
}