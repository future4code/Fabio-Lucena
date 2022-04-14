import Participant from "../../src/Model/Participant"

const participant = {
    id: "001",
    firstName: "Astrodev",
    lastName: "Labenu",
    participation: 55
}

export const participantMock = Participant.toParticipantModel(participant)

const participant2 = {
    id: "002",
    firstName: "Astrodev2",
    lastName: "Labenu2",
    participation: 45
}

export const participantMock2 = Participant.toParticipantModel(participant)