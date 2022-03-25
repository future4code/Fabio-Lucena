import { CustomError } from "../../error/CustomError"
import MeterDash, { meterDashDTO } from "../../model/MeterDash"
import { IdGenerator } from "../../services/IdGenerator"
import MeterDashRepository from "./MeterDashRepository"

export default class MeterDashBusiness{
    private meterDashDatabase: MeterDashRepository
    private idGenerator: IdGenerator

    constructor(
        meterDashImplementation: MeterDashRepository
    ) {
        this.meterDashDatabase = meterDashImplementation
        this.idGenerator = new IdGenerator()
    }
    
    insertMeterDash = async (input: meterDashDTO) => {
        try {
            if (!input.athlete || !input.time || !input.competition_id) {
                throw new CustomError(422, "Missin input")
            }
           
            const active = await this.meterDashDatabase.verifyCompetitionActive(input.competition_id)
            
            if (!active || active === 0) {
                throw new CustomError(400, "A competição já foi encerrada")
            }

            const id: string = this.idGenerator.generate()

            const dashInput = {
                id: id,
                athlete: input.athlete,
                time: input.time,
                competition_id: input.competition_id
            }

            const newDash = MeterDash.toMeterDashModel(dashInput)

            await this.meterDashDatabase.insertMeterDash(newDash)

            const message = "Atleta e tempo adicionados com sucesso!"

            return message

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}