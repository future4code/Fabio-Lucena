export class ListNode{
    constructor(
        public value: any,
        public next: ListNode | null = null
    ){}

    getValue(){
        return this.value
    }

    getNext(){
        return this.next
    }
}