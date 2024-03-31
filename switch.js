// Juego piedra, papel o tijera con switch.

let piedra = "piedra" || "Piedra" || "PIEDRA"; 
let papel = "papel" || "Papel" || "PAPEL";
let tijeras = "tijeras" || "Tijeras" || "TIJERA"

function juegoPiedraPapelTijera(jugador, pc) {
    switch (true) {
        case jugador === piedra && pc === papel:
            return "Has perdido"
            break;
        case jugador === piedra && pc === tijeras:
            return "Has ganado"  
            break;
        case jugador === piedra && pc === piedra:
            return "Has empatado"    
            break;
        case jugador === papel && pc === piedra:
            return "Has ganado"
            break;
        case jugador === papel && pc === papel:
            return "Has empatado"
            break;
        case jugador === papel && pc === tijeras:
            return "Has perdido"
            break;
        case jugador === tijeras && pc === piedra:
            return "Has perdido"
            break;
        case jugador === tijeras && pc === papel:
            return "Has ganado"
            break;
        case jugador === tijeras && pc === tijeras:
            return "Has empatado" 
            break;
        default:
            break;
    }
}