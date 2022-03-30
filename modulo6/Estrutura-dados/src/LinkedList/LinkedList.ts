import { ListNode } from "./ListNode";

export class LinkedList{
    constructor(
        public start: ListNode | null = null
    ){}

    public addToTail(value: any){
        if(!this.start){
            this.start = new ListNode(value)
            return
        }
        let node = this.start
        while (node.next !== null){
            node = node.next
        }
        node.next = new ListNode(value)
    }

    public printList(){
        let node = this.start

        while (node !== null){
            console.log(node.getValue())
            node = node.getNext()
            
        }
    }
}