"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.participantMock2 = exports.participantMock = void 0;
const Participant_1 = __importDefault(require("../../src/Model/Participant"));
const participant = {
    id: "001",
    firstName: "Astrodev",
    lastName: "Labenu",
    participation: 55
};
exports.participantMock = Participant_1.default.toParticipantModel(participant);
const participant2 = {
    id: "002",
    firstName: "Astrodev2",
    lastName: "Labenu2",
    participation: 45
};
exports.participantMock2 = Participant_1.default.toParticipantModel(participant);
//# sourceMappingURL=ParticipantMock.js.map