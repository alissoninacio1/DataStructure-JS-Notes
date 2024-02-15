//as linked-list-class was a big code, I'm adding here other features
// insert, remove, search, reverse

/**
 * insert at a specific position - In this operation, a new node is added to the position specified.
 * For example, if the linked list has four values, you can insert a new node at the third position.
 * The node in the second position will have its next pointer pointing at the new node
 * and the new node points at the node originally in the third position.
 *
 *
 *
 * loop - if the condition i < index -1 is false, the loop will never run
 * Ao utilizar o 'index - 1' no for loop durante o insert em uma linked, se busca o nó anterior da posicao desejada. Isso é essencial para ajustar os ponteiros corretamente, permitindo que o nó anterior aponte para o novo elemento, e o novo elemento aponte para o que era previamente próximo ao no anterior. O uso do -1 em vez de +1 proporciona controle preciso sobrea a posicao de insercao, garantindo uma operacao bem sucedida. Caso o index seja 0, o loop nao sera executado, mantendo o ponteiro na cabeca da lista para insercoes no inicio.
 *
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }

    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      let removedNode;
      while (prev.next && prev.next.value == !value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let i = 0;
    let curr = this.head;

    while (curr) {
      if (curr.value == value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log('list is empty');
    } else {
      let curr = this.head;
      let listValues = ' ';
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
// list.print();

// list.prepend(10);
// list.print();

// list.append(20);
// list.append(30);
list.insert(10, 0);
list.print();

list.insert(20, 0);
list.insert(30, 0);
list.insert(40, 0);
list.print();

console.log(list.removeFrom(0));
list.print();
console.log(list.getSize());

console.log(list.removeValue(10));
list.print();

console.log(list.search(10)); //returns the position

list.reverse();
list.print();
