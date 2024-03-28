function precioTotal (precio, descuento) {
    descuento = (precio * descuento) / 100 
     return precio - descuento
}

precioTotal(100,20)