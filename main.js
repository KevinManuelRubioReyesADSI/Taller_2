let x = 0 
let nums = Number(prompt("Ingrese el total de números"));
let suma=0;
let multi = 1;
for (var i = 0 ; i < nums; i++){
    let num = Number(prompt("Ingrese un número"));
    if (num % 2 == 0){
        suma += num;
    }
    else{
        multi *= num;
    }
}
alert("La suma de los números pares es de:" + suma);
alert("La multiplicacion de los números impares es de:" + multi);