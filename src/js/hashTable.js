class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
    hashMethod(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
    set(key, value) {
      const address = this.hashMethod(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address]; 
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]; 
                }
            }
        }
        return undefined; 
    }

  }
  
  const myHashTable = new HashTable(50);
  console.log(myHashTable);
//charCodeat = número aleatorio entre 0 y 1; 
myHashTable.set("Pammela", 1992); 
myHashTable.set("Luisa", 1991); 
console.log(myHashTable.set("Alejandra", 2000)); 
console.log(myHashTable.set("Alma", 1996)); 
console.log(myHashTable.get("Pammela"));
console.log(myHashTable.get("Luisa")); 
console.log(myHashTable.get("Alejandra")); 
