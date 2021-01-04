//MÉTODOS: 
//prepend = Agregar un nodo al inicio.
//append = Agregar un nodo al final.
//lookup/search = Buscar un nodo.
//insert = Insertar unh nodo en la lista.
//delete = Borrar un nodo.

/* 
Value: Dato que contendrá el nodo, string, number, boolean, etc.
Head: Referencia al primer nodo de la lista.
Tail: Referencia al último nodo de la lista.
Next: Referencia de un nodo al siguiente nodo.
Prev: Referencia de un nodo al nodo anterior de la lista. */

/* Singly Linked List */

class Node {
    constructor(value) {
    this.value = value;
    this.next = null; 
    }
}

class MySinglyList {
    constructor(value) {
       this.head = {
       value: VideoPlaybackQuality, 
       next: null,
       } ;
       this.tail = this.head;

       this.length = 1; 
    }

    append(value){
        const newNode = new Node (value); 

        this.tail.next = newNode; 
        this.tail = newNode; 
        this.length; 
        return this; 
    }

    prepend(value){
        const newNode = new Node(value); 
        
        newNode.next = this.head;
        this.head = newNode; 
        this.length++;

        return this; 
    }

    insert (index, value) {
        if(index >= this.length){
            return this.append(value)
        }

        if(index === 0 ){
            return this.prepend(value); 
        }
        
        const newNode = new Node(value); 
        const firstPointer = this.getTheIndex(index - 1); 
        const holdingPointer = firstPointer.next; 
        firstPointer.next = newNode; 
        newNode.next = holdingPointer; 

        this.length; 
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

    delete(index){
    if(index <= 0) return this.shift(); 
    if(index >= this.length)return this.pop(); 
    const prevDeleteNode = this.getTheIndex(index - 1); 
    prevDeleteNode.next = prevDeleteNode.next.next; 
    this.length--; 
    return this; 
    }

    shift(){
    const secondNode = this.head.next; 
    this.head = secondNode; 
    this.length--; 

    return this; 
    }
    pop(){
    const prevLastNode = this.getTheIndex(this.length - 2); 
    this.tail = prevLastNode; 
    prevLastNode.next = null; 
    this.length--; 
    return this;  
    }

}

let myLinkedList = new MySinglyList(1); 
console.log(myLinkedList); 
console.log(myLinkedList.append(2)); 
console.log(myLinkedList.append(3)); 
console.log(myLinkedList.prepend(0)); 
console.log(myLinkedList.insert(2, 5)); 
console.log(myLinkedList.insert(0, 1)); 
console.log(myLinkedList.delete(3)); 
console.log(myLinkedList); 
