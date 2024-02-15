/**
 * STACK (pilha - pila en esp)
 * The stack data structure is a sequential collection of elements that follows the principle of
 * Last In First Out(LIFO), O ULTIMO A ENTRAR É O PRIMERIO A SAIR.
 *
 * The last element inserted into the stack is the first element to be removed
 *
 * A stack of plates. The last plate placed on top
 *  of the stack is also the first place removed from the stack
 *
 * -----> Stack is an ABSTRACT DATA TYPE. It is defined by its BEHAVIOR rathen than being a mathematical model (no built in implementatios in JS)
 * --you can implement this using a class, an array
 *
 * It supports two main operations:
 *    -push, which adds an element to the collection (ADICIONA NO FINAL DO ARRAY QUE E O INICIO DA PILHA)
 *    -pop, which removes the most recently added element from the collection (REMOVE DO FINAL DO ARRAY QUE E O INICIO DA PILHA)
 *
 *
 * --------USE CASES-------------
 * (when you have to trace back your steps)
 * -browser history tracking
 * -undo operations whrn typing (ctrl + z)
 * -Expressions conversions
 * -Call stack in JS runtime
 *
 */

/**
 * The big O of stack methods is the following:

    Insertion - O(1)
    Removal - O(1)
    Searching - O(n)
    Access - O(n)
* 
*/

//COMO ARRAY -  O FINAL DO ARRAY É O INCIO DA PILHA. O INICIO DELA  NAO COMECA NA POSICAO ZERO
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   *  peek() {
        if (this.isEmpty()) {return null}
        return this.items[0]
      }
   * 
   * 
   * The peek() method is used to only view the last element of an array (elemento do topo da pilha) or view the recently added element in a stack data structure.
   * Unfortunately, there is no method called peek() in the Array object. We have to implement it ourselves in JavaScript.
   * --> o primeiro elemento de um array, pensando em stack, é o primeiro a entrar numa pilha, e depois de adicionar varios elementos ele ficaria embaixo da pilha, por isso que o ultimo elemento do array seria o inicio da pilha, o contrario passa no queue. 
   */

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  //clear is not common, but this would be an implementation
  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
    // or console.log(this.items.join(' -> '))
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
stack.print();

//como OBJETO-----------------------------------------------------------------------------
/** 
class Stack {
  constructor() {
    this.items = {};
    this.head = 0;
  }

  push(element) {
    this.items[this.head] = element;
    this.head++;
  }

  pop() {
    const item = this.items[this.head - 1];
    delete this.items[this.head - 1];
    this.head--;
    return item;
  }

  peek() {
    return this.items[this.head - 1];
  }

  size() {
    return this.head;
  }

  isEmpty() {
    return this.head === 0;
  }

  print() {
    console.log(this.items);
  }
}

*/
//-----------------------------------------------------------------------------
