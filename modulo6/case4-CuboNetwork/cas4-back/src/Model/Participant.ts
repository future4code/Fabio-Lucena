export default class Participant {

    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private participation: number
    ) {
        this.id = id,
            this.firstName = firstName,
            this.lastName = lastName,
            this.participation = participation
    }

    getId() {
        return this.id
    }

    getFirstName() {
        return this.firstName
    }

    getLastName() {
        return this.lastName
    }

    getParticipation() {
        return this.participation
    }

    static toParticipantModel(participant: any): Participant {
        return new Participant(participant.id, participant.firstName, participant.lastName, participant.participation)
    }
}

export type participantDTO = {
    firstName: string,
    lastName: string,
    participation: number
}