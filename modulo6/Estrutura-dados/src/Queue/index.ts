import { Queue } from "./Queue"

const array: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const queueArray = new Queue(array)

// isEmpty
console.log(queueArray.isEmpty())

// enqueue
queueArray.enqueue(11)
queueArray.printQueue()

// dequeue
queueArray.dequeue()
queueArray.printQueue()

// print
queueArray.printQueue()