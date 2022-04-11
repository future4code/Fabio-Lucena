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
const meterDashBusiness_1 = __importDefault(require("../src/business/MeterDash/meterDashBusiness"));
const meterDashDatabaseMock_1 = __importDefault(require("./mocks/meterDashDatabaseMock"));
const meterDashMock_1 = require("./mocks/meterDashMock");
const meterDashBusinessMock = new meterDashBusiness_1.default(new meterDashDatabaseMock_1.default());
describe("Testes do fluxo de 100m rasos", () => {
    test("teste insert Meter Dash, com input faltando", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const meterDashMockada = {
                athlete: "",
                time: meterDashMock_1.meterDashMock.getTime(),
                competition_id: meterDashMock_1.meterDashMock.getCompetition_id
            };
            const insertMeterDash = jest.fn((input) => meterDashBusinessMock.insertMeterDash(input));
            const result = yield insertMeterDash(meterDashMockada);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("Missin input");
            expect(error.statusCode).toBe(422);
            console.log("teste meterDash");
        }
    }));
    test("teste insert Meter Dash, caso competição encerrada", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const meterDashMockada = {
                athlete: meterDashMock_1.meterDashMock.getAthlete(),
                time: meterDashMock_1.meterDashMock.getTime(),
                competition_id: "qualquer_um"
            };
            const insertMeterDash = jest.fn((input) => meterDashBusinessMock.insertMeterDash(input));
            const result = yield insertMeterDash(meterDashMockada);
            console.log(result);
        }
        catch (error) {
            expect(error.message).toBe("A competição já foi encerrada");
            expect(error.statusCode).toBe(400);
            console.log("teste meterDash");
        }
    }));
    test("teste insert Meter Dash, caso de sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const meterDashMockada = {
                athlete: meterDashMock_1.meterDashMock.getAthlete(),
                time: meterDashMock_1.meterDashMock.getTime(),
                competition_id: meterDashMock_1.meterDashMock.getCompetition_id()
            };
            const insertMeterDash = jest.fn((input) => meterDashBusinessMock.insertMeterDash(input));
            const result = yield insertMeterDash(meterDashMockada);
            expect(insertMeterDash).toHaveBeenCalledWith(meterDashMockada);
            expect(result).toBe("Atleta e tempo adicionados com sucesso!");
        }
        catch (error) {
            console.log(error.message);
        }
    }));
});
//# sourceMappingURL=meterDashBusiness.test.js.map