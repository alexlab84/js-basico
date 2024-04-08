let articulos = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'Television', costo: 2500},
    {nombre: 'Libro', costo: 320},
    {nombre: 'Telefono movil', costo: 10000},
    {nombre: 'LapTop', costo: 20000},
    {nombre: 'Teclado', costo: 500},
    {nombre: 'Audifonos', costo: 1700}
]

//Utilizamos .filter y le pasamos un parametro para ver si es verdad o falso, 
//lo va a meter en un nuevo array, pero no modifica el array original.

let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

articulosFiltrados;

//Utilizamos .map para mapear articulos. Genera un nuevo array, no modifica el que tengo, en el cual ya no hay objetos.

let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

//El metodo .find nos ayuda a encontrar algo dentro de nuestro array.
//Este metodo no modifica mi array, crea uno nuevo con el valor si es que lo encuentra;
//este metodo valida un true o un false si encuentra o no el valor.

let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === 'LapTop'
});

//El metodo .forEach no genera un un nuevo array, valida y devuelve lo que pides.

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//El metodo .some nos devuelve una validacion de verdadero o falso para valores que cumplan con esa validacion.
//Con este metodo también se genera un nuevo array.

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});


// Metodos que no modifican el array original (Inmutabilidad)
// map

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);

console.log(numbers);
console.log(squaredNumbers);

//forEach

const colors = ['red', 'pink', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors);
console.log(iteratedColors);

//Crea un programa que convierta de Fahrenheit a celsius

const temperatureInFahrenheit = [32, 68, 95, 104, 212];
const temperatureInCelsius = temperatureInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32));

console.log('Temperatures In Fahrenheit: ', temperatureInFahrenheit);
console.log('Temperatures In Celsius: ', temperatureInCelsius);


// Crea un programa que sume todos los elementos de un array

const newNumbers = [1, 2, 3, 4, 5];

let sum = 0;

newNumbers.forEach(number => {
    sum += number
})

console.log('Array of Numbers: ', newNumbers);
console.log('Sum of Numbers: ', sum);

// Mas ejemplos de filter()

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numeros.filter(numero => numero % 2 === 0);

console.log(numeros);
console.log(evenNumbers);

// Mas ejemplos reduce() caso 1


const numbersReduce = [1, 2, 3, 4, 5];
const suma = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(numbersReduce);
console.log(suma);

// caso 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];
const wordsFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue] ++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordsFrecuency);


// Crea un programa que tome una nota y diga si esta aprobado.


const grades = [85, 92, 60, 78, 95, 66, 88, 50, 68, 94]

const passingGrades = grades.filter(grade => grade >= 70);

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length;

console.log('Original Grades: ', grades);
console.log('Passing Grades: ', passingGrades);
console.log('Average Passing Grade: ', averagePassingGrade);
