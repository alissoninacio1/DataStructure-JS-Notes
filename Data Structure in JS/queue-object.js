class Queue {
  constructor() {
    this.items = {}; //initalizes an object
    this.front = 0; //void object initally - this basically adds the number of elements (keys) in the queue...
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++; //incrementing so that the next element can be inserted in the next position
  }

  //conforme vai tirando elementos o elemento 0 deixa de existir e vou a elemento 1, ao incrementar
  dequeue() {
    const item = this.items[this.front]; //get the front element of the queue
    delete this.items[this.front]; //delete the element at the front of the queue using the 'delete' native operator in objects
    this.front++; // advance or increment the pointer/front tracker by one to dequeue the next element when necessary
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    console.log(this.items);
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
console.log(queue.isEmpty());
queue.print();
