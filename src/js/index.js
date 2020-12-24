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
}
const oneArray = new MyArray(); 
console.log(oneArray.push("Pammela")); 
console.log(oneArray.push("Chris"));
console.log(oneArray.push("Luisa"));
console.log(oneArray.push("Alma"));
console.log(oneArray.get(1));
console.log(oneArray); 