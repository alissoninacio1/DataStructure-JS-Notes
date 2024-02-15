/**
 * TREE
 *
 * A tree is a hierarchical data structure that consists of nodes connected by edges
 * A tree is a non-linear data structure, compared to arrays, linked lists, stacks, and queues which are linear.
 * In linear data structure, the time required to search is proportional do the size of the data set.
 * Trees allow quicker access to the data
 * A tree won't contain any loop or cycle.
 *
 * Grafos têm casos de uso em redes sociais, roteamento de redes, mapas e navegação, dependências de software, fluxo de rede e processamento de linguagem natural.
 * 

---------------------------TREE STRUCTURE-------------------------------------

Node: A basic element in a tree structure that can contain data and references to other nodes (children). Each node can have zero or more child nodes, except for the top node, called the root.

Root: The top node of the tree. It is the starting point of the tree and has no parent node.

Child: A node directly connected to another node in the tree hierarchy, being a direct descendant of that node.

Parent: A node that has at least one child connected to it.

Sibling: Nodes that share the same parent in the tree. They are at the same level in the hierarchy.

Leaf: A node that has no children in the tree, meaning it is a terminal node located at the end of a branch.

Height: The height of a tree is the maximum depth of any node in the tree, measured as the length of the longest path from the root node to a leaf node.

Depth: The depth of a node is the length of the path from the root node to that particular node, counting the number of edges along the path.


--------------BINARY TREE (BST)------------------------------

   - A binary search tree is a tree data structure in which each node has at most two children
   - They are referred to as left child and right child
   
   --------Binary Search Tree-------------------

   - The value of each left node must be smaller than the parent node
   - The value of each right node must be greater than the parent node
   - Each node has at most two children

   OPERATIONS:

   - insertion - to add a node to the tree
   - search  -  to find a node given its value
   - 
 *
 */

/**
 * 
 * ABOUT THE CODE BELOW
 * 
   -Constructor: Initializes an empty binary search tree with a null root node.
   -isEmpty(): Checks if the binary search tree is empty.
   -insert(value): Inserts a new node with the given value into the binary search tree while maintaining the BST property.
   -insertNode(root, newNode):Helper function to recursively insert a new node into the binary search tree.
   -search(root, value):Searches for a node with the given value in the binary search tree.
   -min(root):Finds the minimum value node in the binary search tree.
   -max(root):Finds the maximum value node in the binary search tree.
   -delete(value):Deletes a node with the given value from the binary search tree while maintaining the BST property.
   -deleteNode(root, value):Helper function to recursively delete a node from the binary search tree.
   -inOrder(root), preOrder(root), postOrder(root):Traversal methods that perform in-order, pre-order, and post-order traversal of the binary search tree, respectively.
   -levelOrder():Performs a level-order traversal of the binary search tree, printing each node's value level by level.
  -height(node):Calculates the height of the binary search tree.
  -printLevel(node, level):Prints nodes at a given level in the binary search tree.
  -isBST(node, min, max):Checks whether the binary tree rooted at the given node is a valid binary search tree, ensuring that each node's value is within the specified range



 */

//Node: representing a single node without children, with a single value, and no pointers
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    /** Use the optimised queue enqueue and dequeue from queue-object.js instead.
     * I've used an array for simplicity. */
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  height(node) {
    if (!node) {
      return 0;
    } else {
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  printLevel(node, level) {
    if (!node) {
      return;
    }
    if (level === 1) {
      console.log(`${node.element} `);
    } else if (level > 1) {
      this.printLevel(node.left, level - 1);
      this.printLevel(node.right, level - 1);
    }
  }

  isBST(node, min, max) {
    if (!node) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }
    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}

// TODO level order and delete

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
bst.insert(2);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 7));
bst.inOrder();
bst.preOrder();
bst.postOrder();
bst.levelOrder();
bst.printLevel(bst.root, 3);
console.log(bst.min());
console.log(bst.max());
console.log(bst.height(bst.root));
