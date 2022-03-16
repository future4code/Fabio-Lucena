import { UserBusiness } from "../src/business/UserBusiness"
import HashGeneratorMock from "./mocks/hashGeneratorMock"
import IdGeneratorMock from "./mocks/idGeneratorMock"
import TokenGeneratorMock from "./mocks/tokenGeneratorMock"
import UserDatabaseMock from "./mocks/userDatabaseMock"


const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashGeneratorMock(),
    new TokenGeneratorMock(),
    new UserDatabaseMock() as any

)


describe("Teste da entidade User", ()=>{
    test("Teste getUserById, usuário não existente", async ()=>{
        expect.assertions
        
    })
})