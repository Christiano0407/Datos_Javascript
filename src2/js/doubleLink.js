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
    const newNode = new Node(value)

    newNode.next = this.head; 
    this.head = newNode; 
    this.head.prev = newNode; 
    this.length += 1; 

    return this; 
    }

}

let Doubly = new myDoublyLinkedList(1); 
console.log(Doubly); 
console.log(Doubly.append(2));
console.log(Doubly.append(3));  
console.log(Doubly.prepend(0)); 