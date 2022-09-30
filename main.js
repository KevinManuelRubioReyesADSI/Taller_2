let rol= prompt("Ingresar su rol en la empresa para saber su pago" +"/n" +
"ingrese P si es empleado de planta" + "\n" + "Ingrese A si es empleado administratico");
if (rol == "P") {
    let hortrab = Number(prompt("Ingrese las horas que trabajo"));
    let hora = 20.000;
    let sueldo = hortrab * hora;
    alert( "su sueldo por ser empleado de planta y trabajar " + hortrab + "horas es de: $ " + sueldo + "mil pesos" );
}

else if (rol == "A"){
    let hortrab= Number(prompt("Ingrese las horas que trabajo"));
    let hora = 10.000;
    let sueldo = hortrab * hora;
    alert("su sueldo por ser empleado administrativo y trabajar" + hortrab + "horas de : $" + sueldo + "mil pesos");
}