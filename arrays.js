/* let frutas = ["Manzana", "Pera", "Platano", "Cereza", "Naranja", "Melon"]
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

let posicion = frutas.indexOf("Naranja") */



const fruits = Array('apple', 'banana', 'orange');
console.log(fruits)

const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby'];
console.log(sports);

const recipeIngredients = [
  'Flour',
  true, 
  2, 
  {
    ingredient: 'Milk', quantity : '1 cup'
  },
  false

]
console.log(recipeIngredients);

const firstFruit = fruits[0];
console.log(firstFruit);

const numberOfFruits = fruits.length;
console.log(numberOfFruits);


// Metodos mutabilidad.

fruits.push('watermelon');
console.log(fruits);

// Metodos inmutabiladad.

const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(fruits);
console.log(newFruits);

// Comprobar arrays con Array.isArray()

const isArray = Array.isArray(fruits);
console.log(isArray);

// Sumar elementos de un array (Ejercicio)

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0;

for(let i=0;i < numbersArray.length; i++) {
  sum += numbersArray[i]
}

console.log(sum);


// Metodos push y pop, modifican el array original, mutabilidad

const countries = ['USA', 'Canada', 'UK'];
const newCountries = countries.push('Germany', 'Australia');

console.log(countries);
console.log(newCountries);

const removedCountry = countries.pop();

console.log(countries);
console.log(removedCountry);


