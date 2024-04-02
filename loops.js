let estudiantes = ["Pepe", "Paco", "Manolo", "Tomás"];

function saludarEstudiantes(estudiante) {
    console.log(`Hols, ${estudiante}`)
}

//Bucle for

/* for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i])
    
} */

// estudiantes[i] es el index de nuestro array

//Bucle for of

/* for (let estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
} */

while (estudiantes.length > 0) {
    console.log(estudiantes);
    let estudiante = estudiantes.shift()
    saludarEstudiantes(estudiante);
}


/* En este desafío tu función solution recibirá 3 parámetros:

estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final. */


export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
    estudiantes.push(nuevo);
    return estudiantes;
  }

  export function solution(estudiantes, deathCount, nuevo) {
    if (deathCount == 0) {
      estudiantes.push(nuevo);
    } else {
      for (var i = 0; i < deathCount; i++){
        estudiantes.pop();
      }
      estudiantes.push(nuevo);
    }
    return estudiantes;
  }

/* let list =['eat', 'sleep', 'code', 'repeat'] */

for (let i = 0; i < list.length; i++) {
  console.log(list[i])
  
}

// Bucle forEach

let list = ['eat', 'sleep', 'code', 'repeat']

list.forEach(item => {
  console.log(item)
});

// Bucle for of (Se utiliza solo con objetos iterables(arrays y string), es decir, listas)

let cesta = ['Manzana', 'Pera', 'Naranja', 'Uva']

for (fruta of cesta) {
  console.log(fruta)
}

// Bucle for in (Se utiliza con objetos numerables(objetos: estructura de datos con propiedades y valores))



let listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1
}

for (fruta in listaDeCompras) {
  console.log(fruta)
}

for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

// Para iterar arrays y strings utilizamos bucle for of 
// y para iterar objetos (propiedades y valores) utilizamos
// bucle for in.

// Bucle while

let contador = 0;

while (contador < 10) {
  console.log(contador)
  contador++;
}

// Bucle do while: Primero se pone el codigo a ejecutar y 
// despues la condicion. El codigo se ejecuta por lo menos una vez.

let counter = 0;

do {
  console.log(counter)
  counter++;
} while (counter < 10)





