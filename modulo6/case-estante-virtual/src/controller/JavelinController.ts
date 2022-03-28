import { Request, Response } from "express"
import JavelinBusiness from "../business/JavelinThrow/JavelinBusiness"
import JavelinDatabase from "../data/JavelinDatabase"
import { JavelinDTO } from "../model/Javelin"

export default class JavelinController {
    private javelinBusiness: JavelinBusiness

    constructor() {
        this.javelinBusiness = new JavelinBusiness(new JavelinDatabase())
    }

    insertJavelinThrow = async (req: Request, res: Response) => {
        const input: JavelinDTO = {
            athlete: req.body.athlete,
            distance: req.body.distance,
            competition_id: req.params.id
        }

        try {

            const message = await this.javelinBusiness.insertJavelinThrow(input)

            res.status(200).send({ message })

        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
}
