import JavelinBusiness from "../src/business/JavelinThrow/JavelinBusiness"
import JavelinDatabaseMock from "./mocks/javelinDatabaseMock"
import { javelinMock, javelinMock2, javelinMock3 } from "./mocks/javelinMock"

const javelinBusinessMock = new JavelinBusiness(new JavelinDatabaseMock())

describe("Testes do fluxo de arremesso de dardos", ()=>{
    test("teste insert javelin, com input faltando", async () => {
        try {
            const javelinMockada = {
                athlete: "",
                distance: javelinMock.getDistance(),
                competition_id: javelinMock.getCompetition_id
            }

            const insertJavelinThrow = jest.fn((input: any) => javelinBusinessMock.insertJavelinThrow(input))
            const result = await insertJavelinThrow(javelinMockada)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Missin input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("teste insert javelin, caso competição encerrada", async () => {
        try {
            const javelinMockada = {
                athlete: javelinMock2.getAthlete(),
                distance: javelinMock2.getDistance(),
                competition_id: javelinMock2.getCompetition_id
            }

            const insertJavelinThrow = jest.fn((input: any) => javelinBusinessMock.insertJavelinThrow(input))
            const result = await insertJavelinThrow(javelinMockada)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("A competição já foi encerrada")
            expect(error.statusCode).toBe(400)
        }
    })

    test("teste insert javelin, caso tentativas esgotadas", async () => {
        try {
            const javelinMockada = {
                athlete: javelinMock3.getAthlete(),
                distance: javelinMock3.getDistance(),
                competition_id: javelinMock3.getCompetition_id()
            }

            const insertJavelinThrow = jest.fn((input: any) => javelinBusinessMock.insertJavelinThrow(input))
            const result = await insertJavelinThrow(javelinMockada)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Este atleta já realizou suas 3 tentativas!")
            expect(error.statusCode).toBe(400)
        }
    })

    test("teste insert javelin, caso de sucesso", async () => {
        try {
            const javelinMockada = {
                athlete: javelinMock.getAthlete(),
                distance: javelinMock.getDistance(),
                competition_id: javelinMock.getCompetition_id()
            }

            const insertJavelinThrow = jest.fn((input: any) => javelinBusinessMock.insertJavelinThrow(input))
            const result = await insertJavelinThrow(javelinMockada)
            expect(insertJavelinThrow).toHaveBeenCalledWith(javelinMockada)
            expect(result).toBe("Atleta e distancia adicionados com sucesso!")
        } catch (error: any) {
            console.log(error.message)
        }
    })
})