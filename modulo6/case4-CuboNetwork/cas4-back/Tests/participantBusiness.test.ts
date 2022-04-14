import ParticipantBusiness from "../src/Business/ParticipantBusiness";
import ParticipantDatabaseMock from "./Mocks/ParticipantDatabaseMock";
import { participantMock } from "./Mocks/ParticipantMock";

const participantBusinessMock = new ParticipantBusiness(new ParticipantDatabaseMock())

describe("Teste para os fluxos de participantes", ()=>{
    //Teste para pegar todos os participantes
    
    test("Teste de get para todos os participantes, caso onde não há participantes", async()=>{
        try {
            const getParticipant = jest.fn(()=> participantBusinessMock.getParticipation())
            const result = await getParticipant()
            console.log(result)
        } catch (error: any) {
            expect(error.message).toBe("Não há participantes")
            expect(error.statusCode).toBe(400)
        }
    })

    test("Teste de get para todos os participantes, caso sucesso", async()=>{
        try {
            
            const getParticipation = jest.fn(()=> participantBusinessMock.getParticipation())
            const result = await getParticipation()
            
            expect(result).toBe(participantMock)
        
        } catch (error: any) {
            console.log(error)
        }
    })

    // Teste para inserir participante
    test("Teste para inserir participante, input faltando", async()=>{
        try {
            const inputMockado = {
                firstName: "",
                lastName: "Labenu",
                participation: 45
            }
            const insertParticipant = jest.fn((input: any)=> participantBusinessMock.insertParticipant(input))
            const result = await insertParticipant(inputMockado)
            
           console.log(result)
        
        } catch (error: any) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Teste para inserir participante, participante ja existe", async()=>{
        try {
            const inputMockado = {
                firstName: "Astrodev",
                lastName: "Labenu",
                participation: 45
            }
            const insertParticipant = jest.fn((input: any)=> participantBusinessMock.insertParticipant(input))
            const result = await insertParticipant(inputMockado)
            
           console.log(result)
        
        } catch (error: any) {
            expect(error.message).toBe("Nome já existente")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Teste para inserir participante, caso de sucesso", async()=>{
        try {
            const inputMockado = {
                firstName: "Astrodev2",
                lastName: "Labenu",
                participation: 45
            }
            const insertParticipant = jest.fn((input: any)=> participantBusinessMock.insertParticipant(input))
            const result = await insertParticipant(inputMockado)
            
           expect(insertParticipant).toBeCalledWith(inputMockado)
           expect(result).toBe("Participante incerido com sucesso!")
        
        } catch (error: any) {
            console.log(error.message)
        }
    })

    //Teste para deletar participante
    test("Teste para deletar participante, input faltando", async()=>{
        try {
            const inputMockado = {
                id: ""
            }
            const deleteParticipant = jest.fn((input: any)=> participantBusinessMock.deleteParticipant(input))
            const result = await deleteParticipant(inputMockado.id)
            
           console.log(result)
        
        } catch (error: any) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Teste para deletar participante, participante não encontrado", async()=>{
        try {
            const inputMockado = {
                id: "002"
            }
            const deleteParticipant = jest.fn((input: any)=> participantBusinessMock.deleteParticipant(input))
            const result = await deleteParticipant(inputMockado.id)
            
           console.log(result)
        
        } catch (error: any) {
            expect(error.message).toBe("Pessoa não encontrada")
            expect(error.statusCode).toBe(400)
        }
    })

    test("Teste para deletar participante, caso de sucesso", async()=>{
        try {
            const inputMockado = {
                id: "001"
            }
            const deleteParticipant = jest.fn((input: any)=> participantBusinessMock.deleteParticipant(input))
            const result = await deleteParticipant(inputMockado.id)
            
           expect(deleteParticipant).toBeCalledWith(inputMockado.id)
           expect(result).toBe("Participante deletado com sucesso!")
        
        } catch (error: any) {
            console.log(error.message)
        }
    })
})