/**
 * insertion at the beginning of the list - bigO: constant time complexity
 * insertion at the end of the list: bigO - linear time complexity
 *
 * When the list is empty:
 *        head - pointing at null
 *        tail - pointing at null
 *
 * when insert the first node:
 *        head - pointing at first node
 *        tail - pointing at first node
 *
 * append: Add something to the end.
 * prepend: Add something to the beginning.
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
    this.tail = null;
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
      this.tail = node;
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
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.head;
      let list = '';
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}


module.exports = LinkedList;

/** Uncomment when testing only this file */
/**
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print();
console.log(list.getSize());
list.removeFromFront();
list.print();
list.removeFromEnd();
list.print();
*/