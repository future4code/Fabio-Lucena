import { CustomError } from "../../error/CustomError"
import Javelin, { JavelinDTO } from "../../model/Javelin"
import { IdGenerator } from "../../services/IdGenerator"
import JavelinRepository from "./JavelinRepository"

export default class JavelinBusiness {
    private javelinDatabase: JavelinRepository
    private idGenerator: IdGenerator

    constructor(
        javelinImplementation: JavelinRepository
    ) {
        this.javelinDatabase = javelinImplementation
        this.idGenerator = new IdGenerator()
    }

    insertJavelinThrow = async (input: JavelinDTO) => {
        try {
            if (!input.athlete || !input.distance || !input.competition_id) {
                throw new CustomError(422, "Missin input")
            }
           
            const active = await this.javelinDatabase.verifyCompetitionActive(input.competition_id)
            
            if (!active || active === 0) {
                throw new CustomError(400, "A competição já foi encerrada")
            }

            const numberOfAttempts = await this.javelinDatabase.verifyThrows(input.competition_id, input.athlete)

            if(numberOfAttempts.length > 2){
                throw new CustomError(400, "Este atleta já realizou suas 3 tentativas!")
            }

            const id: string = this.idGenerator.generate()

            const javelinInput = {
                id: id,
                athlete: input.athlete,
                distance: input.distance,
                competition_id: input.competition_id
            }

            const newThrow = Javelin.toJavelinModel(javelinInput)

            await this.javelinDatabase.insertJavelinThrow(newThrow)

            const message = "Atleta e distancia adicionados com sucesso!"

            return message

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

}