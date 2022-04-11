import MeterDashBusiness from "../src/business/MeterDash/meterDashBusiness"
import MeterDashDatabaseMock from "./mocks/meterDashDatabaseMock"
import { meterDashMock } from "./mocks/meterDashMock"

const meterDashBusinessMock = new MeterDashBusiness(new MeterDashDatabaseMock())

describe("Testes do fluxo de 100m rasos", ()=>{
    test("teste insert Meter Dash, com input faltando", async () => {
        try {
            const meterDashMockada = {
                athlete: "",
                // meterDashMock.getAthlete()
                time: meterDashMock.getTime(),
                competition_id: meterDashMock.getCompetition_id
            }

            const insertMeterDash = jest.fn((input: any) => meterDashBusinessMock.insertMeterDash(input))
            const result = await insertMeterDash(meterDashMockada)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Missin input")
            expect(error.statusCode).toBe(422)
            console.log("teste meterDash")
        }
    })

    test("teste insert Meter Dash, caso competição encerrada", async () => {
        try {
            const meterDashMockada = {
                athlete: meterDashMock.getAthlete(),
                time: meterDashMock.getTime(),
                competition_id: "qualquer_um"
            }

            const insertMeterDash = jest.fn((input: any) => meterDashBusinessMock.insertMeterDash(input))
            const result = await insertMeterDash(meterDashMockada)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("A competição já foi encerrada")
            expect(error.statusCode).toBe(400)
            console.log("teste meterDash")
        }
    })

    test("teste insert Meter Dash, caso de sucesso", async () => {
        try {
            const meterDashMockada = {
                athlete: meterDashMock.getAthlete(),
                time: meterDashMock.getTime(),
                competition_id: meterDashMock.getCompetition_id()
            }

            const insertMeterDash = jest.fn((input: any) => meterDashBusinessMock.insertMeterDash(input))
            const result = await insertMeterDash(meterDashMockada)
            expect(insertMeterDash).toHaveBeenCalledWith(meterDashMockada)
            expect(result).toBe("Atleta e tempo adicionados com sucesso!")
        } catch (error: any) {
            console.log(error.message)
        }
    })
})