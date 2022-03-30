import { LinkedList } from "./LinkedList";
import { ListNode } from "./ListNode";

const primeiro: ListNode = new ListNode("primeiro")
const lista: LinkedList = new LinkedList(primeiro)

lista.addToTail("segundo")
lista.addToTail("terceiro")
lista.addToTail("quarto")

// console.log(lista)

lista.printList()
