let elegirFigura = prompt("A que figura le desea calcular el área:" + "\n" +
    "¿Triangulo o circulo" + "\n" + 
    "Escribe T para Triangulo" + "\n" +
    "Escriba C para circulo");
    if (elegirFigura === "T"){
        let base = Número (prompt("Ingrese la base del triangulo "));
        let altura = Número (prompt("Ingrese la altura del triangulo"));
        let areaTr = base * altura / 2 ;
        alert ("El area del triangulo es de " + areaTr);
    }
    else if (elefirfigu == "c"){
        let radio = Número(prompt("Ingrese el radio del circulo"));
         areaCir = Math.PI * radio;
        alert("El area del circulo es de " + areaCir)
    }