import Javelin from "../../src/model/Javelin"

const javelin = {
    id: "id_javelinMockado",
    athlete: "Astrodev",
    distance: "43.20",
    competition_id: "id_mockado2"
}

export const javelinMock = Javelin.toJavelinModel(javelin)


const javelin2 = {
    id: "id_javelinMockado2",
    athlete: "Astrodev2",
    distance: "43.25",
    competition_id: "id_mockado3"
}

export const javelinMock2 = Javelin.toJavelinModel(javelin2)

const javelin3 = {
    id: "id_javelinMockado2",
    athlete: "Astrodev2",
    distance: "43.25",
    competition_id: "id_mockado2"
}

export const javelinMock3 = Javelin.toJavelinModel(javelin3)