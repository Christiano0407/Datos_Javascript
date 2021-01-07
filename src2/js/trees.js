//Binary Tree.
//Methods: Search,insert, delete.
 //Derecha: Aumenta. Izquierda: Disminuye. 
//Ejercicio Tree: 
  //    10
 //  4      20
//2    8  17   170

class Node {
    constructor(value){
        this.right = null; 
        this.left = null; 
        this.value = value; 
    }
}

class binarySearchThree {
   constructor(){
   this.root = null; 
   }

   insert(value){
       const newNode = new Node(value); 
       if(this.root === null){
           this.root = newNode; 
       }else {
           let currentNode = this.root; 
           while(true){
            if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode; 
                    return this; 
                }
                currentNode = currentNode.left; 
            }else {
                if(!currentNode.right){
                    currentNode.right = newNode; 
                    return this; 
                }
                currentNode = currentNode.right; 
            }
           }
       }
   }
}

const myThree = new binarySearchThree(); 

console.log(myThree); 
console.log(myThree.insert(10)); 
console.log(myThree);
console.log(myThree.insert(4)); 
console.log(myThree.insert(20)); 
console.log(myThree); 
console.log(myThree.insert(8)); 
console.log(myThree.insert(17));
console.log(myThree); 
console.log(myThree.insert(2)); 
console.log(myThree.insert(170)); 
console.log(myThree); 