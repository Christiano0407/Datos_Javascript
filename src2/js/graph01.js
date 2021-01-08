//8-4 /4-5-1/1,3,6/4-4-3/3-6-5,/6-3-1.
class Graph {
    constructor() {
      this.nodes = 0;
      this.adjacentList = {};
    }
    addVertex(node) {
      this.adjacentList[node] = [];
      this.nodes++;
    }
    addEdge(node1, node2) {
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    }
  }
  
  const myGraph = new Graph();
console.log(myGraph); 
console.log(myGraph.addVertex("1"));
console.log(myGraph.addVertex("3"));
console.log(myGraph.addVertex("4"));
console.log(myGraph.addVertex("5"));
console.log(myGraph.addVertex("6"));
console.log(myGraph.addVertex("8"));
console.log(myGraph.addEdge("3", "5")); 
console.log(myGraph.addEdge("6", "3")); 
console.log(myGraph.addEdge("1", "6")); 
console.log(myGraph.addEdge("1", "4")); 
console.log(myGraph.addEdge("4", "5")); 
console.log(myGraph.addEdge("2", "4")); 
console.log(myGraph); 
