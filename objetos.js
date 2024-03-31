let miCoche = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2005,
    detalleDelCoche: function () {
        console.log(`Coche ${this.modelo} ${this.annio}`)
    }
};

miCoche.marca;
miCoche.modelo;
miCoche.annio;
miCoche.detalleDelCoche();


//Para generar diferentes objetos utilizamos funciones contructoras de objetos.

function coche(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let cocheNuevo = new coche("Citroen", "C4", 2010);
let cocheNuevo2 = new coche("Citroen", "Outback", 2019);
let cocheNuevo3 = new coche("Toyota", "Corolla", 2005);

//FUNCION CONSTRUCTORA QUE CREA 30 COCHES DIFERENTES CON UN BUCLE

/* function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  } */


  var autos = [];

function auto(marca, modelo, color) {
  this.marca = marca;
  this.modelo = modelo; 
  this.color = color; 
}

for (var i = 0; i < 30; i++ ) {
  var autoNuevo = new auto ("Tesla", "Model S",  "Blue" )
  var agregarAuto = autos.push(autoNuevo);
}
console.log(autos);