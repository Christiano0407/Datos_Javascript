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
    //return node at given index
    //return node at given index
  getNodeAtIndex(index) {
    //if index is not within list return null
    if (index >= this.length || index < 0) return null;
    //iterate through nodes until finding the one at index
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  //change the node at the given index
  setNodeAtIndex(val, index) {
    //find the node using already built method
    const foundNode = this.getNodeAtIndex(index);
    //if the node is found update and return
    if (foundNode) {
      foundNode.value = val;
      return foundNode;
    }
    //else return null
    return null;
  }

  //insert a new node at the index with the given value
  insertAtIndex(index, val) {
    //if index not valid return false
    if (index < 0 || index > this.length) {
      return false;
    }
    //if index is zero use already built unshift
    if (index === 0) {
      return this.unshift(val);
    }
    //if index is at end of list, use already built push
    if (index === this.length) {
      return this.push(val);
    }
    // make a new node, find the nodes before and after it, make before's next the new node, and the newNode's next the after
    const newNode = new Node(val);
    const after = this.getNodeAtIndex(index);
    const before = this.getNodeAtIndex(index - 1);
    newNode.next = after;
    before.next = newNode;

    this.length++;
    return this;
  }
    //Remove node from index
    removeFrom(index) {
        //if index is invalid return false
        if (index < 0 || index >= this.length) {
          return false;
        }
        //if index is at beginning use already built shift
        if (index === 0) return this.shift();
        //if index is at end use already built pop
        if (index === this.length - 1) return this.pop();
        //get before and after, set before's next to after and remove after's reference from removed Node
        const before = this.getNodeAtIndex(index - 1);
        const removedNode = this.getNodeAtIndex(index);
        before.next = removedNode.next;
        removedNode.next = null;
    
        this.length--;
        return removedNode;
      }
    printList(){
        console.log(list)
        if(this.head){
        let current = this.head; 
        while(current.next){
            console.log(current);
            current = current.next; 
        }
        console.log(current);
        }else {
            console.log("Empty List"); 
        }
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
console.log(myLinked.removeFrom(2));
console.log(myLinked);
