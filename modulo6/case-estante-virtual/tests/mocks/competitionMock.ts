import Competition, { Modality } from "../../src/model/Competition";

const competition = {
    id: "id_mockado",
    name: "100m rasos da Labenu",
    modality: Modality.RASOS,
    status: true
}

export const competitionMock = Competition.toCompetitionModel(competition)

const competition2 = {
    id: "id_mockado2",
    name: "lançamento de dardos da Labenu ",
    modality: Modality.DARDO,
    status: true
}

export const competitionMock2 = Competition.toCompetitionModel(competition2)

const competition3 = {
    id: "id_mockado3",
    name: "lançamento de dardos da Labenu 2",
    modality: Modality.DARDO,
    status: false
}

export const competitionMock3 = Competition.toCompetitionModel(competition3)