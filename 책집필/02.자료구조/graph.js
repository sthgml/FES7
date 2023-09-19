// https://gmlwjd9405.github.io/2018/08/13/data-structure-graph.html
class Graph {
    constructor() {
        this.vertices = new Map(); // Using a Map to store vertices and their neighbors
    }

    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
        this.vertices.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
        this.vertices.get(vertex1).push(vertex2);
        this.vertices.get(vertex2).push(vertex1); // For an undirected graph
        }
    }

    getNeighbors(vertex) {
        if (this.vertices.has(vertex)) {
        return this.vertices.get(vertex);
        }
        return [];
    }

    print() {
        for (const [vertex, neighbors] of this.vertices) {
        console.log(`${vertex} -> ${neighbors.join(', ')}`);
        }
    }
}

// Example usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log("Graph:");
graph.print();

console.log("Neighbors of 'A':", graph.getNeighbors('A'));
console.log("Neighbors of 'D':", graph.getNeighbors('D'));