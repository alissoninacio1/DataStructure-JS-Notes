/**
 *  ---------GRAPHS-------
 *
 *  - Graphs are data structures consisting of a set of vertices (or nodes) and a set of edges that connect these vertices.
 *  - They are widely used to model relationships between objects in various areas of computer science and beyond.
 *  - Graph is defined as an ordered pair G=(V,E), where V is a set of vertices and E is a set of edges.
 *  - Edges can be directed or undirected, depending on whether the connection between vertices has an associated direction.
 *
 *
 * USE CASES
 * The Graph class and its methods can be used for social network analysis, route planning, dependency resolution in software systems, network routing, game development, and recommendation systems.
 *
 *
 *
 * --ABOUT THE CODE BELOW
 * - Constructor: Initializes an empty graph with an empty adjacency list.
 * - addVertex(vertex): Adds a new vertex to the graph. If the vertex already exists, it does nothing.
 * - addEdge(vertex1, vertex2): Adds an edge between two vertices in the graph. If either of the vertices doesn't exist, it adds them to the graph first.
 * - removeEdge(vertex1, vertex2):Removes the edge between two vertices in the graph.
 * - removeVertex(vertex): Removes a vertex from the graph along with all its associated edges.
 * - hasEdge(vertex1, vertex2): Checks if there is an edge between two vertices in the graph.
 * - display(): Displays the adjacency list representation of the graph, showing each vertex along with its adjacent vertices.
 *
 *
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.display();
graph.removeEdge('A', 'B');
graph.display();
graph.removeVertex('A');
graph.display();
