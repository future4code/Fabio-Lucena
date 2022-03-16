import { User } from "../../src/model/User";
import { userMock, userMock2 } from "./userMock";

export default class UserDatabaseMock{
    public async getUserById(id: string): Promise<User | undefined> {
        if(id === "id_mockado"){
            return userMock
        }else if(id === "id_mockado_2"){
            return userMock2
        }else {
            return undefined
        }
    }
}