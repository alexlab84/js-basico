//splice

const vegetables = ['carrot', 'brocoli', 'spinach', 'tomato'];
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion');

console.log(vegetables);
console.log(removedVegetables);

//reverse

const numbers = [1, 2, 3, 4, 5];
const reverseNumbers = numbers.reverse()

console.log(numbers);
console.log(reverseNumbers);

//sort con numeros (los convierte a string y mira el unicode)

const unsortedNumbers1 = [4, 18, 1, 62, 34];
const unicodeSortedNumbers = unsortedNumbers1.sort();

console.log(unsortedNumbers1);
console.log(unicodeSortedNumbers);

const unsortedNumbers2 = [4, 18, 1, 62, 34];
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)
// 4 - 18 = -14
// 18 - 1 = 17

console.log(unsortedNumbers2);
console.log(sortedNumbers);

// sort con strings - UTF-16 Hace alusion a nuestro alfabeto

const cities = ['New York', 'Paris', 'Tokio', 'London']
const sortedCities = cities.sort()

console.log(cities);
console.log(sortedCities);

// fill

const ages = [21, 35, 45, 50];
console.log(ages.fill(0, 2, 4));
console.log(ages.fill(15, 1));
console.log(ages.fill(15));

