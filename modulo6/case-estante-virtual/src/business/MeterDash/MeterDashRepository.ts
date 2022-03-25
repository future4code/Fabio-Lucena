import MeterDash from "../../model/MeterDash"

export default interface MeterDashRepository{
    verifyCompetitionActive (id: string): Promise<any> 
    insertMeterDash (input: MeterDash): Promise<MeterDash>
}