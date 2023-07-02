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
const nombre_usuario = prompt("¿Cuál es tu nombre?").toUpperCase();
const MI_NOMBRE= "LEONEL";
const NOMBRE_HERMANO = "JUAN" 
if (nombre_usuario === MI_NOMBRE) {
  console.log(`Hola, Tocayo! Yo también me llamo ${nombre_usuario}`);
} else if (nombre_usuario === NOMBRE_HERMANO()) {
  console.log(`Hola ${nombre_usuario}, te llamás igual que mi hermano`);
} else {
  console.log(`Hola ${nombre_usuario}!`);
}


//Tarea 2:
const edadUsuario = parseInt(prompt("¿Cuál es tu edad?"));
const MI_EDAD = 43;

function calcularDiferenciaEdad(edadUsuario, MI_EDAD) {
  if (edadUsuario > MI_EDAD) {
    return `Sos ${edadUsuario - MI_EDAD} años más grande que yo`;
  } else if (edadUsuario < MI_EDAD) {
    return `Sos ${MI_EDAD - edadUsuario} años más chico que yo`;
  } else {
    return `Tenemos la misma edad`;
  }
}

console.log(calcularDiferenciaEdad(edadUsuario, MI_EDAD));


//Tarea 3:

const usuarioTieneDocumento = prompt("¿Tenés documento?").toLowerCase();
const EDAD_MINIMA = 18;
const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";

if (usuarioTieneDocumento === RESPUESTA_SI) {
  const edad = parseInt(prompt("¿Cuál es tu edad?"));
  if (edad >= EDAD_MINIMA) {
    console.log("Podés entrar al bar");
  } else {
    console.log("No podés entrar al bar");
  }
} else if (usuarioTieneDocumento === RESPUESTA_NO) {
  console.log("No podés entrar al bar");
} else {
  console.log("No entendí la respuesta");
}