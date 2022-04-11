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
const competitionMock_1 = require("./competitionMock");
class CompetitionDatabaseMock {
    constructor() {
        this.createCompetition = (competition) => __awaiter(this, void 0, void 0, function* () {
            return competitionMock_1.competitionMock;
        });
        this.verifyCompetitionActive = (id) => __awaiter(this, void 0, void 0, function* () {
            if (id === "id_mockado") {
                return 1;
            }
            else if (id === "id_mockado2") {
                return 0;
            }
        });
        this.verifyCompetitionById = (id) => __awaiter(this, void 0, void 0, function* () {
            if (id === "id_mockado") {
                return competitionMock_1.competitionMock;
            }
            else if (id === "id_mockado2") {
                return competitionMock_1.competitionMock2;
            }
            else {
                return false;
            }
        });
        this.endCompetition = (id) => __awaiter(this, void 0, void 0, function* () { return "competição encerrada!"; });
        this.meterDashRanking = (id) => __awaiter(this, void 0, void 0, function* () { return "ranking 100m rasos"; });
        this.javelinRanking = (id) => __awaiter(this, void 0, void 0, function* () { return "ranking arremesso de dardos"; });
    }
}
exports.default = CompetitionDatabaseMock;
//# sourceMappingURL=competitionDatabaseMock.js.map