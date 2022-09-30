let A = 0.10;
let B = 0.15;
let C = 0.20;


let membresia = prompt("Ingrese su categoría de membresía" + "\n" + 
                        "A, B o C");
    if(membresia === "A" ){
        let price = Number(prompt("Ingrese el costo de su helado"));
        let descu = price * A;
        let total = price - descu;
        alert("Por tener membresía tipo A, recibiste un descuento del " + A + "% " + "\n" + 
              "El precio que tendrás que pagar por tu helado es de: $" + total + " mil pesos");
    }
    else if (membresia === "B"){
        let price = Number(prompt("Ingrese el costo de su helado"));
        let descu = price * B;
        let total = price - descu;
        alert("Por tener membresía tipo B, recibiste un descuento del " + B + "% " + "\n" + 
              "El precio que tendrás que pagar por tu helado es de: $" + total + " mil pesos");
    }
    else if(membresia === "C") {
        let price = Number(prompt("Ingrese el costo de su helado"));
        let descu = price * C;
        let total = price - descu;
        alert("Por tener membresía tipo C, recibiste un descuento del " + C + "% " + "\n" + "El precio que tendrás que pagar por tu helado es de: $" + total + " mil pesos");
    }