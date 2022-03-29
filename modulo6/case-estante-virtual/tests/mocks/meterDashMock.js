"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meterDashMock = void 0;
const MeterDash_1 = __importDefault(require("../../src/model/MeterDash"));
const meterDash = {
    id: "id_meterDashMockado",
    athlete: "Astrodev",
    time: "10.20",
    competition_id: "id_mockado"
};
exports.meterDashMock = MeterDash_1.default.toMeterDashModel(meterDash);
//# sourceMappingURL=meterDashMock.js.map