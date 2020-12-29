//Linked List: Son un conjunto de nodos ordenados que contienen los valores (numbers, string, boolean...)
//1 --> 2 --> 3 --> 4 --> 5 --> null;

/* let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value:3,
                next: {
                    value: 4,
                    next: {
                        value: 5,
                        next: null,
                    },
                },
            },
        },
    },
};  */

//Métodos (llamar)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//
class MySinglyLinkedList {
    constructor(value) {
     this.head = {
         value: value, 
         next: null,
     }; 
     this.tail = this.head; 
     this.length = 1;
    }

    append(value){
        //Recibimos valor.
        const newNode = new Node(value);
        //Cambiamos el valor del next del tail/ agregar un nuevo node.
        this.tail.next = newNode;
        //El último nodo se convierte en el tail
        this.tail = newNode;
        this.length++;

        return this; 
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    //index=agregar
    insert(index, value){
      if(index >= this.length){
          return this.append(value)
      }
      const newNode = new Node(value);
      const firstPointer = this.getTheIndex(index - 1); 
      const holdingPointer = firstPointer.next;
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
    //1
    /* remove(index){
        if(index >= this.length){
            console.log("índecie no valido");
            return this; 
        }
        if(index === 0){
            this.head = this.head.next;
            this.length--; 
            return this; 
        }
        const firstPointer = this.getTheIndex(index - 1);
        const removePointer = this.getTheIndex(index);
        firstPointer.next = removePointer.next; 
        this.length--; 
        return this; 
    } */
    //2
  /*   moveToTail(index) {
		const { currentNode, lastNode } = this.getNodeByIndex(index);
		if (!currentNode && !lastNode) {
			return "No available index";
		}

		lastNode.next = currentNode.next;
		this.tail.next = currentNode;
		this.tail = currentNode;
		currentNode.next = null;
		return this;
	} */
}

/* //El método ParentNode.append() inserta un conjunto de objetos de tipo Node u objetos de tipo 
//DOMString después del último hijo de ParentNode.
// Los objetos DOMString son insertados como nodos Text equivalentes. */

//Comenzar la instancia:

let myLinkedList = new MySinglyLinkedList(1); 
console.log(myLinkedList); 
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.prepend(0));
console.log(myLinkedList.insert(2, 5)); 
/* console.log(myLinkedList.remove(3)); */