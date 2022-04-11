"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.javelinMock3 = exports.javelinMock2 = exports.javelinMock = void 0;
const Javelin_1 = __importDefault(require("../../src/model/Javelin"));
const javelin = {
    id: "id_javelinMockado",
    athlete: "Astrodev",
    distance: "43.20",
    competition_id: "id_mockado2"
};
exports.javelinMock = Javelin_1.default.toJavelinModel(javelin);
const javelin2 = {
    id: "id_javelinMockado2",
    athlete: "Astrodev2",
    distance: "43.25",
    competition_id: "id_mockado3"
};
exports.javelinMock2 = Javelin_1.default.toJavelinModel(javelin2);
const javelin3 = {
    id: "id_javelinMockado2",
    athlete: "Astrodev2",
    distance: "43.25",
    competition_id: "id_mockado2"
};
exports.javelinMock3 = Javelin_1.default.toJavelinModel(javelin3);
//# sourceMappingURL=javelinMock.js.map