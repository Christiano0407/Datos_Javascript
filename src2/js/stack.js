class Node {
    constructor(value){
     this.value = value; 
     this.next = null; 
    }
}

class Stack {
    constructor(){
        this.top = null; 
        this.bottom = null; 
        this.length = 0; 
    }
    //Devuelve el elemento hasta arriba del stack
    peek(){
    return this.top; 
    }
    //Recibe el valor a añadir al stack.
    push(value){
        const newNode = new Node (value); 

        if(this.length === 0){
            this.top = newNode; 
            this.bottom = newNode; 
        }else {
            const holdingPointer = this.top; 
            //top del stack ahora es el nuevo nodo
            this.top = newNode; 
            //el siguiente es el temporal
            this.top.next = holdingPointer; 
        }
        this.length++; 
        return this; 
    }
    pop(){
        const tempDta = this.top.next;
        this.top = tempDta; 
        this.length++; 
        return this; 
    }
}

const myStack = new Stack(); 

console.log(myStack); 
console.log(myStack.push("Playera1"));
console.log(myStack.push("Playera2")); 
console.log(myStack.push("PlayeraStarWars"));
console.log(myStack.push("GorraMarvel"));
console.log(myStack.pop()); 