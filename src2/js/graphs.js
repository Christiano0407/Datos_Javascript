//Formas de representación Graph.

/* 2 - 0
  7  
 1  3 */

 //Edge List (formas de conectar - graphs / array):

const graph = [
    [0,2], 
    [2,3],
    [2,1],
    [1,3],
]; 

//Adjacent List: 
         //     0     1       2       3    
const graph = [[2], [2,3], [0,1,3], [1, 2]]; 

//Objeto o Hash Table:

const graph = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,3],
}

//Adjacent Matrix:
//TRABAJAS CON BINARIO (0 Y 1)
// sí existe una conexión = 1 / Sí no = 0.

const graph = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0],
]

// Key(clave)
const graph = {
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0]
}
