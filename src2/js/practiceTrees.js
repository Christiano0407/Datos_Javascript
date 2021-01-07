class Node {
    constructor(value){
    this.right = null; 
    this.left = null; 
    this.value = value; 
    }
}

class searchTree{
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
                    currentNode = currentNode.right
                }
            }
        }
    }

    search(value){
    if(!this.root){
        throw new Error("Not root and value"); 
    }
    let currentNode = this.root; 
    if(currentNode.value === value){
        return currentNode; 
    }
    while(true){
        if(value < currentNode.value){
            if(!currentNode.left){
                return console.log("Not exist coincidence"); 
            }
            if(currentNode.left.value === value){
                return currentNode.left
            }
            currentNode = currentNode.left; 
        }else {
            if(!currentNode.right){
                return console.log("Not exist right coincidence"); 
            }
            if(currentNode.right.value === value){
                return currentNode.right
            }
            currentNode = currentNode.right; 
        }
    }
    }

}

const myTree = new searchTree(); 
console.log(myTree); 
console.log(myTree.insert(10)); 
console.log(myTree.insert(4)); 
console.log(myTree.insert(20)); 
console.log(myTree); 
console.log(myTree.search(20)); 
console.log(myTree.search(4));
