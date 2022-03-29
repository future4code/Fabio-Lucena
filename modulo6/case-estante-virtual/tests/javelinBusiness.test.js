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
const JavelinBusiness_1 = __importDefault(require("../src/business/JavelinThrow/JavelinBusiness"));
const javelinDatabaseMock_1 = __importDefault(require("./mocks/javelinDatabaseMock"));
const javelinMock_1 = require("./mocks/javelinMock");
const javelinBusinessMock = new JavelinBusiness_1.default(new javelinDatabaseMock_1.default());
describe("Testes do fluxo de arremesso de dardos", () => {
    test("teste insert javelin, com input faltando", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const javelinMockada = {
                athlete: "",
                distance: javelinMock_1.javelinMock.getDistance(),
                competition_id: javelinMock_1.javelinMock.getCompetition_id
            };
            const insertJavelinThrow = jest.fn((input) => javelinBusinessMock.insertJavelinThrow(input));
            const result = yield insertJavelinThrow(javelinMockada);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Missin input");
            expect(error.statusCode).toBe(422);
        }
    }));
    test("teste insert javelin, caso competição encerrada", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const javelinMockada = {
                athlete: javelinMock_1.javelinMock2.getAthlete(),
                distance: javelinMock_1.javelinMock2.getDistance(),
                competition_id: javelinMock_1.javelinMock2.getCompetition_id
            };
            const insertJavelinThrow = jest.fn((input) => javelinBusinessMock.insertJavelinThrow(input));
            const result = yield insertJavelinThrow(javelinMockada);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("A competição já foi encerrada");
            expect(error.statusCode).toBe(400);
        }
    }));
    test("teste insert javelin, caso tentativas esgotadas", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const javelinMockada = {
                athlete: javelinMock_1.javelinMock3.getAthlete(),
                distance: javelinMock_1.javelinMock3.getDistance(),
                competition_id: javelinMock_1.javelinMock3.getCompetition_id()
            };
            const insertJavelinThrow = jest.fn((input) => javelinBusinessMock.insertJavelinThrow(input));
            const result = yield insertJavelinThrow(javelinMockada);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Este atleta já realizou suas 3 tentativas!");
            expect(error.statusCode).toBe(400);
        }
    }));
    test("teste insert javelin, caso de sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const javelinMockada = {
                athlete: javelinMock_1.javelinMock.getAthlete(),
                distance: javelinMock_1.javelinMock.getDistance(),
                competition_id: javelinMock_1.javelinMock.getCompetition_id()
            };
            const insertJavelinThrow = jest.fn((input) => javelinBusinessMock.insertJavelinThrow(input));
            const result = yield insertJavelinThrow(javelinMockada);
            expect(insertJavelinThrow).toHaveBeenCalledWith(javelinMockada);
            expect(result).toBe("Atleta e distancia adicionados com sucesso!");
        }
        catch (error) {
            console.log(error.message);
        }
    }));
});
//# sourceMappingURL=javelinBusiness.test.js.map