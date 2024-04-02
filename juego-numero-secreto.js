const numeroSecreto = Math.floor(Math.random() *10 + 1)

const numeroJugador = parseInt (prompt('Adivina el número secreto del 1 al 10'))


console.log(`Este es el número con el que juegas ${numeroJugador}`)

if(numeroJugador === numeroSecreto) {
    console.log('Has ganado')
} else if (numeroJugador < numeroSecreto) {
    console.log('El numero es muy bajo, prueba otra vez')
} else {
    console.log('El numero es muy alto')
}


// Operador ternario

/* let mensaje;

const edad = 20;

if (edad >= 18) {
    mensaje = "Es mayor de edad"
} else {
    mensaje = "No es mayor de edad"
}

console.log(mensaje); */


//condicion ? true : false


const edad = 20;

const mensaje = edad >= 18 ? "Es mayor de edad" : "No es mayor de edad"

console.log(mensaje);
