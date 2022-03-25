import { Request, Response } from "express"
import MeterDashBusiness from "../business/MeterDash/meterDashBusiness"
import MeterDashDatabase from "../data/MeterDashDatabase"
import { meterDashDTO } from "../model/MeterDash"

export default class MeterDashController{
    private meterDashBusiness: MeterDashBusiness

    constructor() {
        this.meterDashBusiness = new MeterDashBusiness(new MeterDashDatabase())
    }

    insertMeterDash = async (req: Request, res: Response) => {
        const input: meterDashDTO = {
            athlete: req.body.athlete,
            time: req.body.time,
            competition_id: req.params.id
        }
    
        try {
    
            const message = await this.meterDashBusiness.insertMeterDash(input)
    
            res.status(200).send({ message })
    
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
}

