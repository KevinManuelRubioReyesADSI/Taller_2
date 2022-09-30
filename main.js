let estudiantes = 5;
let promedio = 0;
for(var i = 1; i <= estudiantes; i++) {
    let name = prompt("Ingrese su nombre estudiante " + i);
    let apell = prompt("Ingrese su apellido " + name);
    let edad = prompt("Ingrese su edad  " + name);
    let nota = Number(prompt("Ingrese su nota " + name ));
     promedio += nota / estudiantes;
}
alert("La nota promedio en la rama de computación es de: " + promedio);