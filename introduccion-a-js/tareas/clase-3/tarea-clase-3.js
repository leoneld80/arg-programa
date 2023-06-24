// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

//Tarea 1:
const nombre = prompt("¿Cuál es tu nombre?").toUpperCase();
const miNombre = "Leonel".toUpperCase();

if (nombre === miNombre) {
  console.log(`Hola, Tocayo! Yo también me llamo ${nombre}`);
} else if (nombre === "Juan".toUpperCase()) {
  console.log(`Hola ${nombre}, te llamás igual que mi hermano`);
} else {
  console.log(`Hola ${nombre}!`);
}


//Tarea 2:
const edadUsuario = parseInt(prompt("¿Cuál es tu edad?"));
const miEdad = 43;

function calcularDiferenciaEdad(edadUsuario, miEdad) {
  if (edadUsuario > miEdad) {
    return `Sos ${edadUsuario - miEdad} años más grande que yo`;
  } else if (edadUsuario < miEdad) {
    return `Sos ${miEdad - edadUsuario} años más chico que yo`;
  } else {
    return `Tenemos la misma edad`;
  }
}

console.log(calcularDiferenciaEdad(edadUsuario, miEdad));


//Tarea 3:

const tieneDocumento = prompt("¿Tenés documento?").toLowerCase();

if (tieneDocumento === "si") {
  const edad = parseInt(prompt("¿Cuál es tu edad?"));
  if (edad >= 18) {
    console.log("Podés entrar al bar");
  } else {
    console.log("No podés entrar al bar");
  }
} else if (tieneDocumento === "no") {
  console.log("No podés entrar al bar");
} else {
  console.log("No entendí la respuesta");
}
