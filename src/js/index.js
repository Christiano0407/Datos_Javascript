/* const array = ["Diego", "Luisa", "Chris", "Natasha"];
console.log(array[1]); 
console.log(array.push("Pamela")); 
console.log(array);  */

//
class MyArray{
    constructor(){
        //num de elementos.
        this.length = 0; 
        //elementos que voy a guardar. 
        this.data = {}; 
    }
    //index=agregar
    get(index){
    return this.data[index]; 
    }
    //item = llamar. 
    //Agregar elementos
    push(item){
        this.data[this.length] = item; 
        this.length++; 
        return this.data; 
    }
    //Quitar el último elemento. 
    pop(item){
        const lastItem = this.data[this.length - 1]; 
        delete this.data[this.length -1]; 
        this.length--; 
        return lastItem; 
    }
    //Borrar un elemento. 
    delete(index){
        const item = this.data[index]
        this.shiftIndex(index);
        return item; 
    }
    shiftIndex(index){
        //No iniciar desde 0, se pone index 
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i + 1]; 
        }
        delete this.data[this.length -1]; 
        this.length--; 
    }
    //Elimina el primer elemento. 
    shift(){
        const firstItem = this.data[0];
        this.shiftIndex(0);
        return firstItem; 
    }
    //Agrega un elemento al inicio del array. 
    unshift (item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
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
console.log(oneArray.pop());
console.log(oneArray);
console.log(oneArray.length);
console.log(oneArray.delete(1));
console.log(oneArray); 
console.log(oneArray.shift()); 
console.log(oneArray); 
console.log(oneArray.unshift("Samantha"));
console.log(oneArray); 