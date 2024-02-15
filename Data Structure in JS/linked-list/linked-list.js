/**
 * LINKED LIST
 *
 * A linked list is a linear data structure that includes a series of connected nodes
 * Each node consists of a data value and a pointer that points to the next node
 * (benefit) The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure (if compared to arrays)
 * ( disadvantage) Random access of elements is not feasible (nao viavel) and accessing an element has a linear time complexity
 * The linked list data structure supports three main operations:
 *    - Insertion, to add an element at the beginning, end or at a given index in the list
 *    - Deletion, to remove an item given its index or value
 *    - Search, to find an element given its value
 *
 *  The last node always points to NULL, except for circular linked lists.
 *  The beginning of the data (first element) is called "head"
 *  Each node has a value and a pointer to the next node, that's null in case o being the last.
 *
 *  A graphic representation: [10 | -]-> [20 | -]-> [30 | -]-> null
 *
 * Usage:
 *    - all applications of both stacks and queues are applications of linked lists
 *    - image viwer/slide shows
 */
