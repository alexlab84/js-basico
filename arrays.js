let frutas = ["Manzana", "Pera", "Platano", "Cereza", "Naranja", "Melon"]
console.log(frutas);

//Acceder a elementos del array
console.log(frutas[3]);

//Elementos que tiene el array
console.log(frutas.length);

//Metodos que mutan el array

//.push añade elementos al final del array

let masFrutas = frutas.push("Sandia");
console.log(frutas);

let numArray = [1,2,3,4,5]

function newNum(){
  numArray.push(6,7)
  console.log(numArray)
}

newNum()

//.pop elimina el ultimo elemento del array

let ultimo = frutas.pop()



//let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .pop()
let popArray = array.pop()

//Revisamos. El output debe de ser [1,2,3,4]
console.log(array)

//.unshift agrega un elemento al principio del array

let longitud = frutas.unshift("Chirimoya")

//.shift elimina el primer elemento del array


let borrarFruta = frutas.shift()

let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray = array.shift()

//Revisamos. El output debe de ser [2,3,4,5]
console.log(array)


// .indexOf sirve para encontrar el indice en un array

let posicion = frutas.indexOf("Naranja")


