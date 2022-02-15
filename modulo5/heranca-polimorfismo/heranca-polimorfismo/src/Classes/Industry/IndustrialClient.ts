import { Client } from "../Client"
import { Industry } from "./Industry"

export class IndustrialClient extends Industry implements Client {

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private nri: string,
        machinesQuantity: number,
        cep: string){

        super(machinesQuantity, cep)

    }

    public getIndustrialNumber(): string{
        return this.nri
    }

    public calculateBill(): number {
        return (this.consumedEnergy * 0.53 + this.machinesQuantity * 100)
    }

}