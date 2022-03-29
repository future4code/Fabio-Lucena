"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.competitionMock3 = exports.competitionMock2 = exports.competitionMock = void 0;
const Competition_1 = __importStar(require("../../src/model/Competition"));
const competition = {
    id: "id_mockado",
    name: "100m rasos da Labenu",
    modality: Competition_1.Modality.RASOS,
    status: true
};
exports.competitionMock = Competition_1.default.toCompetitionModel(competition);
const competition2 = {
    id: "id_mockado2",
    name: "lançamento de dardos da Labenu ",
    modality: Competition_1.Modality.DARDO,
    status: true
};
exports.competitionMock2 = Competition_1.default.toCompetitionModel(competition2);
const competition3 = {
    id: "id_mockado3",
    name: "lançamento de dardos da Labenu 2",
    modality: Competition_1.Modality.DARDO,
    status: false
};
exports.competitionMock3 = Competition_1.default.toCompetitionModel(competition3);
//# sourceMappingURL=competitionMock.js.map