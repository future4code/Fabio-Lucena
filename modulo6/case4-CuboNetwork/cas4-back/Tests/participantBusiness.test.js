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
const ParticipantBusiness_1 = __importDefault(require("../src/Business/ParticipantBusiness"));
const ParticipantDatabaseMock_1 = __importDefault(require("./Mocks/ParticipantDatabaseMock"));
const ParticipantMock_1 = require("./Mocks/ParticipantMock");
const participantBusinessMock = new ParticipantBusiness_1.default(new ParticipantDatabaseMock_1.default());
describe("Teste para os fluxos de participantes", () => {
    test("Teste de get para todos os participantes, caso onde não há participantes", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getParticipant = jest.fn(() => participantBusinessMock.getParticipation());
            const result = yield getParticipant();
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Não há participantes");
            expect(error.statusCode).toBe(400);
        }
    }));
    test("Teste de get para todos os participantes, caso sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getParticipation = jest.fn(() => participantBusinessMock.getParticipation());
            const result = yield getParticipation();
            expect(result).toBe(ParticipantMock_1.participantMock);
        }
        catch (error) {
            console.log(error);
        }
    }));
    test("Teste para inserir participante, input faltando", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const inputMockado = {
                firstName: "",
                lastName: "Labenu",
                participation: 45
            };
            const insertParticipant = jest.fn((input) => participantBusinessMock.insertParticipant(input));
            const result = yield insertParticipant(inputMockado);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Missing input");
            expect(error.statusCode).toBe(422);
        }
    }));
    test("Teste para inserir participante, participante ja existe", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const inputMockado = {
                firstName: "Astrodev",
                lastName: "Labenu",
                participation: 45
            };
            const insertParticipant = jest.fn((input) => participantBusinessMock.insertParticipant(input));
            const result = yield insertParticipant(inputMockado);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Nome já existente");
            expect(error.statusCode).toBe(422);
        }
    }));
    test("Teste para inserir participante, caso de sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const inputMockado = {
                firstName: "Astrodev2",
                lastName: "Labenu",
                participation: 45
            };
            const insertParticipant = jest.fn((input) => participantBusinessMock.insertParticipant(input));
            const result = yield insertParticipant(inputMockado);
            expect(insertParticipant).toBeCalledWith(inputMockado);
            expect(result).toBe("Participante incerido com sucesso!");
        }
        catch (error) {
            console.log(error.message);
        }
    }));
    test("Teste para deletar participante, input faltando", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const inputMockado = {
                id: ""
            };
            const deleteParticipant = jest.fn((input) => participantBusinessMock.deleteParticipant(input));
            const result = yield deleteParticipant(inputMockado.id);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Missing input");
            expect(error.statusCode).toBe(422);
        }
    }));
    test("Teste para deletar participante, participante não encontrado", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const inputMockado = {
                id: "002"
            };
            const deleteParticipant = jest.fn((input) => participantBusinessMock.deleteParticipant(input));
            const result = yield deleteParticipant(inputMockado.id);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Pessoa não encontrada");
            expect(error.statusCode).toBe(400);
        }
    }));
    test("Teste para deletar participante, caso de sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const inputMockado = {
                id: "001"
            };
            const deleteParticipant = jest.fn((input) => participantBusinessMock.deleteParticipant(input));
            const result = yield deleteParticipant(inputMockado.id);
            expect(deleteParticipant).toBeCalledWith(inputMockado.id);
            expect(result).toBe("Participante deletado com sucesso!");
        }
        catch (error) {
            console.log(error.message);
        }
    }));
});
//# sourceMappingURL=participantBusiness.test.js.map