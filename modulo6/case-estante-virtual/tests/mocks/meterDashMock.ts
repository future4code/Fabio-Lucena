import MeterDash from "../../src/model/MeterDash"

const meterDash = {
    id: "id_meterDashMockado",
    athlete: "Astrodev",
    time: "10.20",
    competition_id: "id_mockado"
}

export const meterDashMock = MeterDash.toMeterDashModel(meterDash)