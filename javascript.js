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

/* este código permite mostrar u ocultar el menú de navegación en dispositivos móviles cuando se hace clic en el botón de hamburguesa.*/
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});
/*oculta menu cuando hacemos click en una de las opciones de la barra de navegacion en modo "hamburguesa"*/
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarCollapse.classList.remove('show');
  });
});
/*Este código selecciona todos los enlaces de la barra de navegación y agrega un escuchador de eventos de clic a cada uno. Cuando se hace clic en uno de los enlaces, se quita la clase "show" del elemento de la barra de navegación, lo que oculta el menú hamburguesa.*/