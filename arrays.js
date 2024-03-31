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

//.pop elimina el ultimo elemento del array

let ultimo = frutas.pop()

//.unshift agrega un elemento al principio del array

let longitud = frutas.unshift("Chirimoya")

//.shift elimina el primer elemento del array


let borrarFruta = frutas.shift()


// .indexOf sirve para encontrar el indice en un array

let posicion = frutas.indexOf("Naranja")


