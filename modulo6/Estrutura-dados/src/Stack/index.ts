import { LinkedList } from "./LinkedList";
import { ListNode } from "./ListNode";

const primeiro: ListNode = new ListNode("primeiro")
const lista: LinkedList = new LinkedList()



//isEmpty

console.log(lista.isEmpty())

// push
const lista2: LinkedList = new LinkedList(primeiro)
lista2.push("segundo")
lista2.push("terceiro")
lista2.push("quarto")
lista2.printList()

//pop
lista2.pop()
lista2.printList()

//print
lista2.printList()

