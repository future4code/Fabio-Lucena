import CompetitionBusiness from "../src/business/CompetitionBusiness"
import { Modality } from "../src/model/Competition"
import CompetitionDatabaseMock from "./mocks/competitionDatabaseMock"
import { competitionMock, competitionMock2 } from "./mocks/competitionMock"

const competitionBusinessMock = new CompetitionBusiness(new CompetitionDatabaseMock())

describe("Testes para todos os fluxos da entidade competition", () => {
    // Testes do create Competition
    test("teste createCompetition, com input faltando", async () => {
        try {
            const competitionMockada = {
                name: "",
                modality: Modality.DARDO
            }

            const createCompetition = jest.fn((input: any) => competitionBusinessMock.createCompetition(input))
            const result = await createCompetition(competitionMockada)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Missin input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("teste createCompetition, com input modality inválido", async () => {
        try {
            const competitionMockada = {
                name: "Lançamento de Dardos, espacial da Labenu",
                modality: "LANÇAMENTO DE DARD"
            }

            const createCompetition = jest.fn((input: any) => competitionBusinessMock.createCompetition(input))
            const result = await createCompetition(competitionMockada)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Invalid modality")
            expect(error.statusCode).toBe(422)
        }
    })

    test("teste createCompetition, caso de sucesso", async () => {
        try {
            const competitionMockada = {
                name: competitionMock.getName,
                modality: competitionMock.getModality
            }

            const createCompetition = jest.fn((input: any) => competitionBusinessMock.createCompetition(input))
            const result = await createCompetition(competitionMockada)

            expect(createCompetition).toHaveBeenCalledWith(competitionMockada)
            expect(result).toEqual({
                id: "id_mockado",
                name: "100m rasos da Labenu",
                modality: Modality.RASOS,
                status: true
            })

        } catch (error: any) {
            console.log(error)
        }
    })

    //Testes do end Competition

    test("teste endCompetition, com input faltando", async () => {
        try {
            const competitionMockada = {
                id: ""
            }

            const endCompetition = jest.fn((id: any) => competitionBusinessMock.endCompetition(id))
            const result = await endCompetition(competitionMockada.id)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Missin input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("teste endCompetition, com id inexistente", async () => {
        try {
            const competitionMockada = {
                id: "qualquer_um"
            }

            const endCompetition = jest.fn((id: any) => competitionBusinessMock.endCompetition(id))
            const result = await endCompetition(competitionMockada.id)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Competition not found")
            expect(error.statusCode).toBe(400)
        }
    })

    test("teste endCompetition, caso de sucesso", async () => {
        try {
            const competitionMockada = {
                id: competitionMock.getId()
            }

            const endCompetition = jest.fn((id: any) => competitionBusinessMock.endCompetition(id))
            const result = await endCompetition(competitionMockada)

            expect(endCompetition).toHaveBeenCalledWith(competitionMockada.id)
            expect(result).toBe("Competição encerrada!")

        } catch (error: any) {
            console.log(error)
        }

    })

    // Testes de Ranking

    test("teste competitionRanking, com input faltando", async () => {
        try {
            const competitionMockada = {
                id: ""
            }

            const competitionRanking = jest.fn((id: any) => competitionBusinessMock.competitionRanking(id))
            const result = await competitionRanking(competitionMockada.id)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Missin input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("teste competitionRanking, com id inexistente", async () => {
        try {
            const competitionMockada = {
                id: "qualquer_um"
            }

            const competitionRanking = jest.fn((id: any) => competitionBusinessMock.competitionRanking(id))
            const result = await competitionRanking(competitionMockada.id)
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Competition not found")
            expect(error.statusCode).toBe(400)
        }
    })

    test("teste competitionRanking, caso de sucesso para 100m rasos", async () => {
        try {
            const competitionMockada = {
                id: competitionMock.getId()
            }

            const competitionRanking = jest.fn((id: any) => competitionBusinessMock.competitionRanking(id))
            const result = await competitionRanking(competitionMockada)

            expect(competitionRanking).toHaveBeenCalledWith(competitionMockada.id)
            expect(result).toBe("ranking 100m rasos")

        } catch (error: any) {
            console.log(error)
        }

    })

    test("teste competitionRanking, caso de sucesso para 100m rasos", async () => {
        try {
            const competitionMockada = {
                id: competitionMock2.getId()
            }

            const competitionRanking = jest.fn((id: any) => competitionBusinessMock.competitionRanking(id))
            const result = await competitionRanking(competitionMockada)

            expect(competitionRanking).toHaveBeenCalledWith(competitionMockada.id)
            expect(result).toBe("ranking arremesso de dardos")

        } catch (error: any) {
            console.log(error)
        }

    })

})