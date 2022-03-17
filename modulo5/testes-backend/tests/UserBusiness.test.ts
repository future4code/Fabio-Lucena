import { UserBusiness } from "../src/business/UserBusiness"
import { userIdDTO } from "../src/controller/UserController"
import { User } from "../src/model/User"
import HashGeneratorMock from "./mocks/hashGeneratorMock"
import IdGeneratorMock from "./mocks/idGeneratorMock"
import TokenGeneratorMock from "./mocks/tokenGeneratorMock"
import UserDatabaseMock from "./mocks/userDatabaseMock"
import { userMock } from "./mocks/userMock"


const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashGeneratorMock(),
    new TokenGeneratorMock(),
    new UserDatabaseMock() as any

)


describe("Teste da entidade User", ()=>{
    test("Teste getUserById, usuário não existente", async ()=>{
        expect.assertions
        try {
            const userMockado: any = {
                // id: userMock.getId(),
                id: "abc",
                token: "token"
            }
           const getUserById = jest.fn((id: string)=> userBusinessMock.getUserById(id)) 
           const result =  await getUserById(userMockado)
           console.log(result)
        } catch (error) {
            expect(error.message).toBe("User not found")
            expect(error.statusCode).toBe(404)
        }
    })

    test("Teste getUserById, resposta sucesso", async ()=>{
        expect.assertions(2)        
        try {
            const userMockado: any = {
                id: userMock.getId(),
                token: "token"
            }

            const getUserById = jest.fn((user: any)=> userBusinessMock.getUserById(user))

           const result =  await getUserById(userMockado)
           
           expect(getUserById).toHaveBeenCalledWith(userMockado)
           expect(result).toEqual({
            id: "id_mockado",
            name: "astrodev",
            email: "astrodev@gmail.com",
            password: "astrodev123",
            role: "ADMIN"
           })

        } catch (error) {
            console.log(error.message)
        }
    })
})