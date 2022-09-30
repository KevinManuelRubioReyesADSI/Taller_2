let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));
    if(num1 > num2){
        let resta = num2 - num1;
        alert("Debido a que el numero " + num1 + " es mayor que " + num2 + " se restó y dió un total de: " + resta);
    }
    else {
        alert("No es posible hacer esta operación");
    }
 