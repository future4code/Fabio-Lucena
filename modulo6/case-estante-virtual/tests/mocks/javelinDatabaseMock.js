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
const javelinMock_1 = require("./javelinMock");
class JavelinDatabaseMock {
    constructor() {
        this.verifyCompetitionActive = (id) => __awaiter(this, void 0, void 0, function* () {
            if (id === "id_mockado2") {
                return 1;
            }
            else if (id === "id_mockado3") {
                return 0;
            }
        });
        this.insertJavelinThrow = (input) => __awaiter(this, void 0, void 0, function* () {
            return javelinMock_1.javelinMock;
        });
        this.verifyThrows = (id, athlete) => __awaiter(this, void 0, void 0, function* () {
            if (athlete === "Astrodev") {
                return 1;
            }
            else if (athlete === "Astrodev2") {
                return 3;
            }
        });
    }
}
exports.default = JavelinDatabaseMock;
//# sourceMappingURL=javelinDatabaseMock.js.map