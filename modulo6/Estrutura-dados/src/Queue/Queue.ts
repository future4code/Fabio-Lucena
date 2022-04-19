import { ListNode } from "../LinkedList/ListNode"

export class Queue{
    constructor(
        public items: any[] = []
    ){}
    public isEmpty(): boolean{
        return this.items.length === 0
    }

    public enqueue(value: any): void{
        this.items[this.items.length] = value
    }

    public dequeue(): any{
        const firstItem = this.items[0]

        this.items.splice(0, 1)

        return firstItem
    }

    public printQueue(): void{
        console.log(this.items)
    }
}