/* let edad = 18;
if (edad === 18) {
    return "Puedes votar, es tu primera vez"    
} else if (edad > 18) {
    return "Puedes votar, eres veterano en esto"
} else {
    return "No puedes votar, votaras cuando seas mayor de 18 años"
}


//Operador ternario

condition ? true : false;

let numero = 1;

let resultado = numero === 1 ? "Soy un uno" : "No soy un uno"  
console.log(resultado) */

// Juego piedra papel o tijera

let piedra = "piedra" || "Piedra" || "PIEDRA"; 
let papel = "papel" || "Papel" || "PAPEL";
let tijeras = "tijeras" || "Tijeras" || "TIJERA"

function juegoPiedraPapelTijera(jugador, pc) {
    if (jugador === piedra && pc === papel) {
       return "Has perdido" 
    } else if (jugador === piedra && pc === tijeras) {
        return "Has ganado"
    } else if (jugador === piedra && pc === piedra) {
       return "Has empatado" 
    } else if (jugador === papel && pc === piedra) {
        return "Has ganado"
    } else if (jugador === papel && pc === papel){
        return "Has empatado" 
    } else if (jugador === papel && pc === tijeras) {
        return "Has perdido"
    } else if (jugador === tijeras && pc === piedra) {
        return "Has perdido"
    } else if (jugador === tijeras && pc === papel) {
        return "Has ganado"
    } else if (jugador === tijeras && pc === tijeras) {
        return "Has empatado" 
    }
}