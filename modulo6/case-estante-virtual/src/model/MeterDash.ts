import Competition, { Modality } from "./Competition"
import Modalitys from "./Modalitys"

export default class MeterDash extends Modalitys{
    private time: number

    constructor(
        id: string,
        athlete: string,
        time: number,
        competition_id: string
        ) {
        super(id, athlete, competition_id)
        this.time = time
    }
    getId(){
        return this.id
    }

    getAthlete() {
        return this.athlete
    }

    getTime() {
        return this.time
    }

    getCompetition_id(){
        return this.competition_id
    }

    static toMeterDashModel(competition: any): MeterDash {
        return new MeterDash(competition.id, competition.athlete, competition.time, competition.competition_id);
      }
}

export type meterDashDTO = {
    athlete: string,
    time: number,
    competition_id: string
}