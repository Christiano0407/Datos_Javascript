/* //KEY AND VALUE. 
//Estructura de datos que empareja clave con valor. 
//BUCKETS (GUARDO MI VALUE).Tabla. Una Matriz. 
//Hash Function = índice o dirección  de dónde pertenece (key, value).
//Métodos: Insert (Insertar uh elemento en la tabla) / Search (Buscar un elemento por key) / Delete (Borrar un elemento). */
//
class HashTable {
    constructor(size){
        this.data = new Array(size); 
    }
    //Hash Function:
    hashMethod(key){
        let hash = 0; 
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length; 
        }
        return hash; 
    }
    //métodos:
    //agregar:
    set(key, value){
    const address = this.hashMethod(key);
    if(!this.data[address]){
        this.data[address] = []; 
    } 
    this.data[address].push([key, value]);
    return this.data; 
    }
    //Búsqueda o obtener:
    get(key){

    }
}
//Instancias
const myHashTable = new HashTable(50);
console.log(myHashTable);
console.log(myHashTable.set("Pammela",1992));
console.log(myHashTable.set("Luisa",1991));  
console.log(myHashTable.set("Mauricio",1990));
console.log(myHashTable); 
