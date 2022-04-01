import { v4 } from "uuid"
export default class IdGenerator{
    generate(): string {

        return v4();
    }
}