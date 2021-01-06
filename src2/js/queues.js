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

    pekk(){
        return this.bottom; 
    }

   enQueue(value){
   const newNode = new Node(value);
   
   if(this.length === 0){
       this.bottom = newNode;
       this.top = newNode; 

       this.length++; 
       return this; 
   }
   }

   getBottom(){
    return this.top; 
}
 
 deQueue(){
  if(this.length === 0){
      return "Nothing Dates"; 
  }
  if(this.length === 1){
      this.top = null; 
      this.bottom =null;
      this.length++;
      return this; 
  }
  this.bottom = this.bottom.next; 
  this.length--; 
  return this; 
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
//console.log(myQueue.deQueue());

