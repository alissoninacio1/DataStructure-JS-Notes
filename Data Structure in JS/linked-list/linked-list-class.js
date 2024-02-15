/**
 * LINKED LIST IMPLEMENTATION CLASS
 *
 * each node has a value and a pointer to the next node in the list
 * [value, pointer do the next node --]--> null
 *
 * a class that can be instantiated whenever a new node has to be added to the list.
 * this.value = value   ---->  the value to be stored in the node.
 * this.next = null     ----->  next pointer which points to null when create because it's the last element in the list (The pointer address to the next node. )
 *
 *
 * A linked list is a continuous list of nodes
 * where a node is a block structure housing the node value and a pointer (or memory) address to the next node.
 * Each node from the head node has a next pointer that keeps the address of the next node till it gets to the last node, which points to nothing.
 *
 *
 * head: The head of the linked list, which is the first node.
 * tail: The tail of the linked list, which is the last node.
 * size: The size of the linked list.
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
  -when working with a linked list we always mantain a pointer to the first node in the list.
  -that pointer is called 'head', and it's crucial to almost every operation we'll perform on a linkedlist
  -however, when a linked is empty, there is no first node to point at and hence(portanto) the head will point at null
  - link empty: when there is only one node; no link to another node.
*/

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

  //The prepend method adds a new node at the head of the linked list,
  //making it the new head node. The previous head node is automatically set as the next node after the new node.
  //empty list (if block) - check if there is a node, if not, create a new then add it as a head, and incremment the list size
  //existing list (else block) - connect the new node to the list (the pointer of the new node added won't be null, because it'll be the list)
  // then, this new node added at the beginning needs to be set as the head - this.head = node

  //if else can be refactored to just:
  // node.next = this.head
  // this.head = node

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

  // The append method adds a new node to the end of the linked list.
  // for adding a node at the end, makes the last node points to the new added, instead of point to null
  // This method traverses the linked list until the next node pointer points to null – signifying the end of the linked list.
  //The new node is attached to the tail’s node pointer, and the size of the linked list is incremented.
  //prev - when the previous counter goes to the end of the list (crosses the last node in the list) reaching the condition prev.next != null, so at the end of the loop, we make prev.next points at the new node.
  // const node = new Node(value) - creates a node for appending
  // this.head = if the list is empty, the new node created should be the this.head value
  // prev = this.head - the var starts the count in the head node.
  // while-  loop over the list seeing if there is a node (if prev.next exist or if it's not null), if the prep inside the loop reaches the null, the loop is broken, making prev staying/tarrying in the last node, before to move to a null value.
  // Remember we are evaluating prev.next, that won't allow the prev value be null, because it will always check if the next is null, and not itself that would be just 'prev' instead of 'prev.next'
  // prev.next = node  ------ the last node that would be null, now receive the node created.
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

  //curr (current) a temporary pointer to loop over the list. if curr pointer is null, then it lopped over the list
  // curr pointer crosses the last node in the list and points at null (remember that each node points to another node. In this case, it will be pointed untill the last nodee. Then, curr will store a null value meaning a node that doesn't exist - it is null an the loop will be broken)
  //initially the current will be the head, then it will move forward until curr be falsy (null)
  //listValues - to store and print the values
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
list.print();

list.prepend(10);
list.print();

list.append(20);
list.append(30);
list.print();

/**
 *  time complexity
 *
 * prepend: constant O(1) - it does not depend on how many other elements are there in the list (we are adding to the beginning at the list)
 * append: O(n) - we don't know how many elements are in the list (while loop) is linear
 *
 * INSERTION AND REMOVAL in liked list is efficient. So why, if append is linear?
 * it's possible append a new node in constant time O(1), but that involves maintaining a 'tail pointer' that always point at the last node in the list.
 *
 *
 */
