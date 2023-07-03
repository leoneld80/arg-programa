
const $botonEnviar = document.querySelector('#enviar');

$botonEnviar.onclick = function () {
    const nombre = document.querySelector('#nombre').value;

    const apellido = document.querySelector('#apellido').value;

    const edad = document.querySelector('#edad').value;

    const resultado = document.querySelector('#resultado');

    const saludo = document.querySelector('#saludo');

    resultado.innerText = `Nombre: ${nombre} Apellido: ${apellido} Edad: ${edad}`;

    saludo.innerText = `Bienvenido ${nombre}`;
    return false;
}