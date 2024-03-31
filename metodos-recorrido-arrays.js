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

