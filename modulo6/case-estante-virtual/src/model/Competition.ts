import { CustomError } from "../error/CustomError"

export default class Competition {
    private id: string
    private name: string
    private modality: Modality
    private status: boolean

    constructor(
        id: string,
        name: string,
        modality: Modality,
        status: boolean
    ) {
        this.id = id
        this.name = name,
            this.modality = modality,
            this.status = status
    }

    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    getModality() {
        return this.modality
    }
    getStatus() {
        return this.status
    }

    static stringToModality(input: string): Modality {
        switch (input) {
            case "100M RASOS":
                return Modality.RASOS;
            case "LANÇAMENTO DE DARDOS":
                return Modality.DARDO;
            default:
                throw new CustomError(422, "Invalid modality");
        }
    }

    static toCompetitionModel(competition: any): Competition {
        return new Competition(competition.id, competition.name, competition.modality, competition.status);
    }
}


export type CompetitionDTO = {
    name: string,
    modality: Modality
}

export enum Modality {
    RASOS = "100M RASOS",
    DARDO = "LANÇAMENTO DE DARDOS"
}