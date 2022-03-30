import { ListNode } from "./ListNode";

export class LinkedList {
    constructor(
        public start: ListNode | null = null
    ) { }

    public isEmpty(): boolean {
        return this.start === null
    }

    public push(value: any) {
        if (!this.start) {
            this.start = new ListNode(value)
            return
        }
        let node = this.start
        while (node.next !== null) {
            node = node.next
        }
        node.next = new ListNode(value)
    }

    public printList() {
        let node = this.start

        while (node !== null) {
            console.log(node.getValue())
            node = node.getNext()

        }
    }

    public pop() {
        let previousNode: ListNode | null = null
        let currentNode: ListNode | null = this.start

        while(currentNode!.next !== null){
            previousNode = currentNode
            currentNode = currentNode!.next
        }

        previousNode!.next = null

        return currentNode
    }
}