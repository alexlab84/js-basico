let palabraOculta = 'javascript';
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
  if(suposicion.toLowerCase === palabraOculta) {
    return true;
  }  
  return false;
}

function jugarAdivinaLaPalabra() {
  alert ('Bienvenido a juego de adivinar la palabra');
  alert ('Tienes 3 intentos para adivinarla');
  alert ('-pista- la palabra es un lenguaje de programacion');
}

while (intentos > 0) {
    let suposicion = prompt('Adivina la palabra')

    if (verificarSuposicion(suposicion, palabraOculta)) {
       alert ('¡Correcto! Has adivinado la palabra.')
       break;
    } else {
        intentos--;
        if (intentos > 0) {
            alert (`Incorrecto, aun tienes ${intentos} restantes.`);
        } else {
            alert (`Agotaste tus intentos, la palabra oculta era ${palabraOculta}`);
        }
    }
}

jugarAdivinaLaPalabra();