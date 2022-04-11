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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompetitionBusiness_1 = __importDefault(require("../src/business/CompetitionBusiness"));
const Competition_1 = require("../src/model/Competition");
const competitionDatabaseMock_1 = __importDefault(require("./mocks/competitionDatabaseMock"));
const competitionMock_1 = require("./mocks/competitionMock");
const competitionBusinessMock = new CompetitionBusiness_1.default(new competitionDatabaseMock_1.default());
describe("Testes para todos os fluxos da entidade competition", () => {
    test("teste createCompetition, com input faltando", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                name: "",
                modality: Competition_1.Modality.DARDO
            };
            const createCompetition = jest.fn((input) => competitionBusinessMock.createCompetition(input));
            const result = yield createCompetition(competitionMockada);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Missin input");
            expect(error.statusCode).toBe(422);
        }
    }));
    test("teste createCompetition, com input modality inválido", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                name: "Lançamento de Dardos, espacial da Labenu",
                modality: "LANÇAMENTO DE DARD"
            };
            const createCompetition = jest.fn((input) => competitionBusinessMock.createCompetition(input));
            const result = yield createCompetition(competitionMockada);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Invalid modality");
            expect(error.statusCode).toBe(422);
        }
    }));
    test("teste createCompetition, caso de sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                name: competitionMock_1.competitionMock.getName,
                modality: competitionMock_1.competitionMock.getModality
            };
            const createCompetition = jest.fn((input) => competitionBusinessMock.createCompetition(input));
            const result = yield createCompetition(competitionMockada);
            expect(createCompetition).toHaveBeenCalledWith(competitionMockada);
            expect(result).toEqual({
                id: "id_mockado",
                name: "100m rasos da Labenu",
                modality: Competition_1.Modality.RASOS,
                status: true
            });
        }
        catch (error) {
            console.log(error);
        }
    }));
    test("teste endCompetition, com input faltando", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                id: ""
            };
            const endCompetition = jest.fn((id) => competitionBusinessMock.endCompetition(id));
            const result = yield endCompetition(competitionMockada.id);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Missin input");
            expect(error.statusCode).toBe(422);
        }
    }));
    test("teste endCompetition, com id inexistente", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                id: "qualquer_um"
            };
            const endCompetition = jest.fn((id) => competitionBusinessMock.endCompetition(id));
            const result = yield endCompetition(competitionMockada.id);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Competition not found");
            expect(error.statusCode).toBe(400);
        }
    }));
    test("teste endCompetition, caso de sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                id: competitionMock_1.competitionMock.getId()
            };
            const endCompetition = jest.fn((id) => competitionBusinessMock.endCompetition(id));
            const result = yield endCompetition(competitionMockada);
            expect(endCompetition).toHaveBeenCalledWith(competitionMockada.id);
            expect(result).toBe("Competição encerrada!");
        }
        catch (error) {
            console.log(error);
        }
    }));
    test("teste competitionRanking, com input faltando", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                id: ""
            };
            const competitionRanking = jest.fn((id) => competitionBusinessMock.competitionRanking(id));
            const result = yield competitionRanking(competitionMockada.id);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Missin input");
            expect(error.statusCode).toBe(422);
        }
    }));
    test("teste competitionRanking, com id inexistente", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                id: "qualquer_um"
            };
            const competitionRanking = jest.fn((id) => competitionBusinessMock.competitionRanking(id));
            const result = yield competitionRanking(competitionMockada.id);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Competition not found");
            expect(error.statusCode).toBe(400);
        }
    }));
    test("teste competitionRanking, caso de sucesso para 100m rasos", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                id: competitionMock_1.competitionMock.getId()
            };
            const competitionRanking = jest.fn((id) => competitionBusinessMock.competitionRanking(id));
            const result = yield competitionRanking(competitionMockada);
            expect(competitionRanking).toHaveBeenCalledWith(competitionMockada.id);
            expect(result).toBe("ranking 100m rasos");
        }
        catch (error) {
            console.log(error);
        }
    }));
    test("teste competitionRanking, caso de sucesso para 100m rasos", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const competitionMockada = {
                id: competitionMock_1.competitionMock2.getId()
            };
            const competitionRanking = jest.fn((id) => competitionBusinessMock.competitionRanking(id));
            const result = yield competitionRanking(competitionMockada);
            expect(competitionRanking).toHaveBeenCalledWith(competitionMockada.id);
            expect(result).toBe("ranking arremesso de dardos");
        }
        catch (error) {
            console.log(error);
        }
    }));
});
//# sourceMappingURL=competitionBusiness.test.js.map