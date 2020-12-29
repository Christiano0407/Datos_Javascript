//Doble linkd List:
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null; 
    }
}
class MyDoubleLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null,
        }; 
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

    //Agrega un nodo al principio de la lista.
    prepend(value){
        const firstNode = new Node(value);
        this.head.prev = firstNode; 
        firstNode.next = this.head; 
        this.head = firstNode; 
        this.length++; 
        return this; 
        }

    //Agrega un nodo en cualquier parte de la lista:
    insert(value, index){
        if(index >= this.length){
            return this.append(value);
        }
        if(index <= 0){
            return this.prepend(value);
        }
        const node = new Node(value); 
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = node;
        node.next = holdingPointer;
        node.prev = firstPointer;
        holdingPointer.prev = node;
        this.length++;
        return this; 
    }
}
 let doubleList = new MyDoubleLinkedList(1);
console.log(doubleList); 
console.log(doubleList.append(2));
console.log(doubleList.append(3));
//console.log(doubleList.prepend()); 
console.log(doubleList.insert(2,4));
