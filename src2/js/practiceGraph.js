class Graph {
    constructor(){
        this.nodes = 0; 
        this.adjecentList = {}; 
    }
    //MÉTODOS
     //nODOS = Vertice
    addVertex(node){
    this.adjecentList[node] = []; 
    this.nodes++; 
    }
    //Bordes = Edge.
    addEdge(node1, node2){
    this.adjecentList[node1].push(node2);
    this.adjecentList[node2].push(node1); 
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
console.log(myGraph.addEdge("3","5"));
console.log(myGraph.addEdge("6","3"));
console.log(myGraph.addEdge("1","6"));
console.log(myGraph.addEdge("1","3"));
console.log(myGraph.addEdge("1","4"));
console.log(myGraph.addEdge("4","5"));
console.log(myGraph.addEdge("8","4"));
console.log(myGraph);