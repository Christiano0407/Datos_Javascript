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
}

let mySinglyList = new MySinglyList(1); 
console.log(mySinglyList); 
