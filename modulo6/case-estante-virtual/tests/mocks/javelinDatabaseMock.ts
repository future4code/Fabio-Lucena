import Javelin from "../../src/model/Javelin"
import { javelinMock } from "./javelinMock"

export default class JavelinDatabaseMock {
    public verifyCompetitionActive = async (id: string): Promise<any> => {
        if (id === "id_mockado2") {
            return 1
        } else if (id === "id_mockado3") {
            return 0
        }
    }

    public insertJavelinThrow = async (input: Javelin): Promise<Javelin> => {
        return javelinMock
    }

    public verifyThrows = async (id: string, athlete: string): Promise<any> => {
        if(athlete === "Astrodev"){
            return 1
        }else if(athlete === "Astrodev2"){
            return 3
        }
    }
}