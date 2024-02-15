/**
 * QUEUE (fila, [esp: fila o cola])
 * 
 * The queue data structure is a sequential collection of elements that follows the principle of:
 * FIRST IN FIRST OUT (FIFO) - 
 *  Lembre-se que no queue:
        o comeco do array e o comeco da fila (contrario da stack, que fica no final do array) 
        e a entrada é no fim da fila (igual ao da stack, a entrada e no final do array)
 * The first element inserted into the queue is the first element to be removed.
 * A queue of people. People enter the queue at one end (rear/tail)and leave the queue from the other end (front/head)
 * 
 * QUEUE is an ABSTRACT data type in JS. it is defined by its behavior rather than being a mathematical model (implementation)
 * 
 * 
 * Same as with stacks, there's more than one way to implement a queue. But probably the simplest is using an array with its push and shift methods.
 * If we only use push and shift for adding and deleting elements, we'll always follow the FIFO pattern and so operate over it like a queue.
 * 
 * 
 * The big O of queue methods is the following:
    Insertion - O(1)
    Removal - O(1)
    Searching - O(n)
    Access - O(n)
 * 
 * 
 * The Queue data sctructure supports two main operations
 *    - Enqueue, which adds an element to the rear/tail of th collection
 *    - Dequeue, which removes an element from the front/head of the collection
 */

// IMPLEMENTACAO COM ARRAY
class Queue {
  constructor() {
    this.items = [];
  }

  //add element to the queue (it will be the last element)
  enqueue(element) {
    this.items.push(element);
  }

  //remove the oldest element from the queue (first element)
  dequeue() {
    //this in built shitf method has a linear complexity that's not favorable
    // an implementation using object isntead of array will allow dequeue and queue have constant time complexity
    return this.items.shift();
  }

  //returns the value of the top ("front") of the collection without removing the element from the collection.
  //it reads the value only
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
