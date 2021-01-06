class Node {
    constructor(value){
    this.value = value; 
    this.next = null;  
    this.prev = null; 
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = 0; 
    }
    
    push(value){
    const newNode = new Node(value); 
        if(!this.head){
           this.head = newNode; 
           this.tail = newNode; 
        }else {
           this.tail.next = newNode; 
           newNode.prev = this.tail; 
           this.tail = newNode; 
        }
        this.length++; 
        return this; 
    }

    pop(){
        if(this.length === 0){
            return false; 
        }
        const popped = this.tail; 
        const newTail = this.tail.prev; 
        if(newTail){
            newTail.next = null; 
            this.tail.prev = null; 
        }else {
            this.head = null; 
        }

        this.tail = newTail; 
        this.length--; 
        return popped; 
    }
    unshift(value){
        const newNode = new Node(value); 
        
        if(!this.head){
        this.head = newNode; 
        this.tail = newNode; 
        }else {
         newNode.next = this.head; 
         this.head = newNode; 
        }
        this.length++; 
        return this; 
    }
    shift(){
    if(!this.head)return false; 
    const shiftedNode = this.head; 
    const newHead = this.head.next; 

    if(!newHead){
        this.tail = newHead; 
    }
    this.head = newHead; 
    this.length++; 
    return shiftedNode; 
    }

}

const myLinked = new DoublyLinkedList(); 
console.log(myLinked); 
console.log(myLinked.push("Manzana"));
console.log(myLinked.push("Piña")); 
console.log(myLinked.push("Naranja"));
console.log(myLinked.pop("Naranja"));
console.log(myLinked.unshift("Melón"));
console.log(myLinked.unshift("Papaya")); 
console.log(myLinked.shift(1)); 
console.log(myLinked); 
