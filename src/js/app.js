//ARRAY(DATOS):
//Métodos nos permiten trabajar con datos.
class Stack {
    constructor(){
        this.stack = []; 
        //this.length = 0;
    }

    push(element){
        //this.stack[this.length] = element; 
        this.stack.push(element);
        //this.length++; 
        return this.stack; 
    }

    pop(element){
        return this.stack.pop(element); 
    }

    peek(element){
     return this.stack[this.stack.length -1]; 
    }

    size() {
    return this.stack.length;
    }

    print() {
        console.log(this.stack); 
    }
}

const stack = new Stack(); 
console.log(stack);
console.log(stack.push("Alma")); 
console.log(stack.push("Luisa"));
console.log(stack.pop());  
console.log(stack.push("Ana"));
console.log(stack.peek()); 
console.log(stack.size()); 
stack.print();
console.log(stack); 