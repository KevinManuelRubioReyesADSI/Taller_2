let iva = 0.20;
let productos = 1;
for(var i = 1; i<= productos; i++){
    let producto = Number(prompt("ingrese el valor de los 5 productos "));
    let prodiva = producto * iva;
    alert("Por sus 5 productos debe pagar éste IVA: $" + prodiva + "mil pesos");
    let total = prodiva + producto;
    alert("El monto total a pagar por los 5 productos es de: $" + total + "mil pesos");
}