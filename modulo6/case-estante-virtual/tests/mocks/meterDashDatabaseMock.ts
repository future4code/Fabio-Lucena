import MeterDash, { meterDashDTO } from "../../src/model/MeterDash"
import { meterDashMock } from "./meterDashMock"

export default class MeterDashDatabaseMock{
    public verifyCompetitionActive = async (id: string): Promise<any> => {
        if (id === "id_mockado") {
            return 1
        } else if (id === "id_mockado2") {
            return 0
        }
    }

    public insertMeterDash = async (input: MeterDash): Promise<MeterDash>=>{
        return meterDashMock
    }
}