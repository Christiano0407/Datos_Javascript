/* const array = ["Diego", "Luisa", "Chris", "Natasha"];
console.log(array[1]); 
console.log(array.push("Pamela")); 
console.log(array);  */

//
class MyArray{
    constructor(){
        this.length = 0; 
        this.data = {}; 
    }
    get(index){
    return this.data[index]; 
    }
    push(item){
        this.data[this.length] = item; 
        this.length++; 
        return this.data; 
    }
    pop(item){
        const lastItem = this.data[this.length - 1]; 
        delete this.data[this.length -1]; 
        this.length--; 
        return lastItem; 
    }
    delete(index){
        const item = this.data[index]
        this.shiftIndex(index);
        return item; 
    }
    shiftIndex(index){
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i + 1]; 
        }
        delete this.data[this.length -1]; 
        this.length--; 
    }
    shift(){
        const firstItem = this.data[0];
        this.shiftIndex(0);
        return firstItem; 
    }
}
const oneArray = new MyArray(); 
console.log(oneArray.push("Pammela")); 
console.log(oneArray.push("Chris"));
console.log(oneArray.push("Luisa"));
console.log(oneArray.push("Alma"));
console.log(oneArray.get(1));
console.log(oneArray.pop());
console.log(oneArray);
console.log(oneArray.length);
console.log(oneArray.delete(1));
console.log(oneArray); 
console.log(oneArray.shift()); 
console.log(oneArray); 