"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParticipantMock_1 = require("./ParticipantMock");
class ParticipantDatabaseMock {
    constructor() {
        this.getParticipation = () => __awaiter(this, void 0, void 0, function* () {
            let cont = 0;
            let array = [];
            if (cont === 0) {
                cont = 1;
                return array;
            }
            else if (cont === 1)
                return ParticipantMock_1.participantMock;
        });
        this.verifyByName = (name, lastName) => __awaiter(this, void 0, void 0, function* () {
            if (name === "Astrodev") {
                return ({ participantMock: ParticipantMock_1.participantMock });
            }
            else {
                return false;
            }
        });
        this.insert = (input) => __awaiter(this, void 0, void 0, function* () {
            return ParticipantMock_1.participantMock;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            if (id === "001") {
                return (true);
            }
            else {
                return false;
            }
        });
    }
}
exports.default = ParticipantDatabaseMock;
//# sourceMappingURL=ParticipantDatabaseMock.js.map