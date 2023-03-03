/* Ventana emergente al salir del sitio. Nota: segun investigue algunos navegadores no dejan personalizar el mensaje pero igualmente muestran uno por defecto-*/
/*La función asigna una función anónima al evento onbeforeunload del objeto window. 
El evento onbeforeunload se desencadena justo antes de que la ventana se cierre y se utiliza 
para realizar acciones de limpieza, guardar cambios no guardados o mostrar un mensaje de advertencia al usuario.*/
window.onbeforeunload = function() {
    return "¿Estás seguro que quieres salir?";
};
/*funcion para calcular envio*/
function calcularEnvio() {
    var distancia = prompt("Ingrese la distancia a la que se encuentra de San Nicolas en kilómetros:");
    
    if (distancia <= 40) {
        document.getElementById("envio").innerHTML = '<span id="envio-gratis">Envío gratis</span>';
    } else {
        document.getElementById("envio").innerHTML = '<span id="envio-pago">Costo de envío $800</span>';
    }
}
/*hasta las comillas tuve que cambiar jaja*/
/*esta funcion pide a traves de un prompt la distancia para el envio si es menor a 40 kms el envío es gratis
y se actualiza el contenido del elemento con el id envio con la cadena HTML '<span id="envio-gratis">Envío gratis</span>' 
utilizando la propiedad innerHTML del objeto document.getElementById() y si no lo mismo pero con la cadena de "envio-pago".*/
/**/
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});
