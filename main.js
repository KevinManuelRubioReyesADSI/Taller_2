let pago = Número (prompt("Ingrese el dinero que pago el restaurante"));
si ( pago > 130);{
    let descuento = pago * 0.15;
    let pagototal = pago - descuento ;
    alert ("El restaurante Don Julio recibio un descuento del 15% por compras mayores a $130 mil pesos." + "\n" + "Asi que en total debera pagar: $" + pagototal + "mil pesos") 
}

{
    alert("El restaurante Don Julio debe pagar : $" + pago + "mil pesos.");
}