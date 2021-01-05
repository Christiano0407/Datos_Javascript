// Doubly Linked List: 
/* Referencia al nodo siguiente (next).
Referencia al nodo anterior (prev).
Valor del Nodo Dato que guarda el nodo ya sea un string, number, boolean, etc. (value).
Referencia al primer nodo (head).
Referencia al último nodo (tail). */

class Node {
    constructor(value){
    this.value = value; 
    this.next = null; 
    this.prev = null; 
    }
}

class myDoublyLinkedList {
    constructor(value){
        this.head = {
            value:value,
            next: null, 
            prev: null,
        }
        this.tail = this.head; 
        this.length = 1; 
    }

    append(value){
    const newNode = new Node(value); 

    newNode.prev = this.tail; 
    this.tail.next = newNode;
    this.tail = newNode; 
    this.length++; 
    
    return this; 
    }

    prepend(value){
    const newNode = new Node(value); 

    newNode.next = this.head; 
    this.head = newNode; 
    this.head.prev = newNode; 
    this.length += 1; 

    return this; 
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value); 
        }
        if(index === 0){
            return this.prepend(value); 
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index -1); 
        newNode.prev = firstPointer; 
        const holdingPointer = firstPointer.next; 
        holdingPointer.prev = newNode;  
        firstPointer.next = newNode; 
        newNode.next = holdingPointer; 
        this.length++; 

        return this; 
    }
    getTheIndex(index){
        let counter = 0; 
        let currentNode = this.head; 

        while(counter !== index){
            currentNode = currentNode.next; 
            counter++; 
        }
        return currentNode; 
    }

    unshift(value){
        const newNode = new Node(value); 
        
        if(this.head){
        this.head.prev = newNode; 
        }else {
            this.tail = newNode; 
        }
        this.head = newNode; 
    }
    push(value){

    }

    /* remove(index){
        if(index >= this.length) {
          console.error("index is out of limits of the array");
        } else if( index == 0) {
          this.head = this.head.next;
          this.head.prev = null;
          this.length--
        }
        
        else if(index  === this.length - 1){
          const firstPointer = this.getTheIndex(index - 1);
          firstPointer.next = null;
          
          this.tail = firstPointer;
          this.length--;
        } else {
          const firstPointer = this.getTheIndex(index - 1);
          const pointerToRemove = firstPointer.next;
          const nextToPointerToRemove = pointerToRemove.next;
          nextToPointerToRemove.prev = firstPointer;
          firstPointer.next = nextToPointerToRemove;
          this.length--;
        }
       } */

}

let doublyLink = new myDoublyLinkedList(1); 
console.log(doublyLink); 
console.log(doublyLink.append(2));
console.log(doublyLink.append(3));  
console.log(doublyLink.prepend(0));
//console.log(doublyLink.unshift(4)); 
console.log(doublyLink.insert(2, 4))
//console.log(doublyLink.remove(1))
