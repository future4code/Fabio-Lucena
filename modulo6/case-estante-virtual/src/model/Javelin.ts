import Modalitys from "./Modalitys"

export default class Javelin extends Modalitys{
    private distance: number

    constructor(
        id: string,
        athlete: string,
        distance: number,
        competition_id: string
        ) {
        super(id, athlete, competition_id)
        this.distance = distance
    }
    getId(){
        return this.id
    }

    getAthlete() {
        return this.athlete
    }

    getDistance() {
        return this.distance
    }

    getCompetition_id(){
        return this.competition_id
    }

    static toJavelinModel(competition: any): Javelin {
        return new Javelin(competition.id, competition.athlete, competition.distance, competition.competition_id);
      }
}

export type JavelinDTO = {
    athlete: string,
    distance: number,
    competition_id: string
}