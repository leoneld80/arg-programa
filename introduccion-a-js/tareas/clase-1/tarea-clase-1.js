// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.


function calcularEdad(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
}

const anioActual = Number(prompt("Cuál es el año actual?"));
const anioNacimiento = Number(prompt("En qué año naciste?"));

console.log('Tenés ' + calcularEdad(anioActual, anioNacimiento) + ' años');


function calcularSalarioAnual(salarioMensual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioMensual * cantidadMesesEnUnAnio;
}

function calcularSalarioMensual(salarioAnual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioAnual / cantidadMesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual) {
    const cantidadSemanasEnUnAnio = 52;
    return salarioAnual / cantidadSemanasEnUnAnio;
}

function calcularSalarioDiario(salarioAnual) {
    const cantidadDiasEnUnAnio = 365;
    return salarioAnual / cantidadDiasEnUnAnio;
}

const salarioMensual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario anual es $ ' + calcularSalarioAnual(salarioMensual));

const salarioAnual = Number(prompt('Cuál es tu salario anual?'));
console.log('Tu salario mensual es $ ' + calcularSalarioMensual(salarioAnual));
console.log('Tu salario semanal es $ ' + calcularSalarioSemanal(salarioAnual));
console.log('Tu salario diario es $ ' + calcularSalarioDiario(salarioAnual));

