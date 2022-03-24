import Competition from "../model/Competition";
import MeterDash from "../model/MeterDash";

export default interface CompetitionRepository{
    createCompetition (competition: Competition): Promise<Competition>
    verifyCompetitionActive (id: string): Promise<any>
    insertMeterDash (input: MeterDash): Promise<MeterDash> 
}