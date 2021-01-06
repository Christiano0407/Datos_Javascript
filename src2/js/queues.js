//Métodos:
//enqueue: Agregar un elemento al final de la línea.
//dequeue: Remover al primer elemento de la línea.
//peek: Tomar el primer elemento de la línea.
//back: Permite conocer el último elememnto de la cola (último en ser agregado).
//FIFO(First In and First Out).

class Node {
    constructor(value){
    this.value = value; 
    this.next = null; 
    }
}

class Queue {
    constructor(){
        this.top = null; 
        this.bottom = null;
        this.length = 0; 
    }

    peek(){
        return this.top; 
    }

   enQueue(value){
   const newNode = new Node(value);
   
   if(this.length === 0){
       this.top = newNode; 
       this.bottom = newNode;
   }else {
       this.bottom.next = newNode; 
       this.bottom = newNode
   }
   this.length++; 
   return this; 
   }

   getBottom(){
    return this.top; 
}
 
deQueue(value) {
    //const newNode = new Node(value)

    if (this.length === 0) {
      console.error("There is no nodes in the Queue.");
      return;
    }
    
    const firstNode = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    
    this.length--;
    return firstNode
  }

 push(value){
     const newNode = new Node(value); 
     
     if(this.length === 0) {
         this.top = newNode; 
         this.bottom = newNode; 
     }else {
         const holdingPointer = this.top; 
         this.top = newNode; 
         this.top.next =  holdingPointer; 
     }
     this.length++; 
     return this; 
 }

}

const myQueue = new Queue(); 

console.log(myQueue);
//console.log(myQueue.push("PlayeraStarWars"))
console.log(myQueue.enQueue("PlayeraMarvel"));
console.log(myQueue.enQueue("PlayeraStarWars"));
console.log(myQueue.enQueue("PlayeraDisney"));
console.log(myQueue.peek()); 
console.log(myQueue.deQueue());
console.log(myQueue);

