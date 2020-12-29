//Objetos.
class Stack {
  constructor() {
      this.stack = {}; 
      this.count = 0; 
  }

  push(element){
  this.stack[this.count] = element; 
  this.count++; 
  return this.stack; 
  }

  peek(){
      return this.stack[this.count -1];
  }

  delete(index){
   const element = this.stack[index]
   this.shiftIndex(index);
   return element; 
  }
  shiftIndex(index){
  for(let i = index; i < this.count -1; i++ ){
      this.stack[i] = this.stack[i + 1]; 
  }
  delete this.stack[this.count -1];
  this.count--; 
  }

  size(){
      return this.count;
  }

  print(){
      console.log(this.stack);
  }

  pop(element){
  const lastElement = this.stack[this.count - 1];
  delete this.stack[this.count -1]; 
  this.count--; 
  return lastElement; 
  }

  shift(){
      const firstElement = this.stack[0]; 
      this.shiftIndex(0);
      return firstElement; 
  }

  unshift(element){
   for(let i = this.stack; i > 0; i--){
       this.stack[i] = this.stack[i - 1]; 
   }
   this.stack[0] = element;
   this.count++;
   return this.stack;
  }
}

const stack = new Stack();
console.log(stack);
console.log(stack.push("Keane")); 
console.log(stack.push("Coldplay")); 
console.log(stack.push("The Verve"));
console.log(stack.peek());
console.log(stack.delete(2));
console.log(stack);
console.log(stack.size());
stack.print();
console.log(stack.push("Muse"));
console.log(stack.push("James Blunt")); 
console.log(stack.pop()); 
console.log(stack.shift()); 
//console.log(stack.unshift("Queen"));
console.log(stack);  
