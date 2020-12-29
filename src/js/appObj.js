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