import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');

//obtener información
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    //obtener elemento HTML + valor
    const nombre = document.querySelector('[data-nombre]').value; 
    const email = document.querySelector('[data-email]').value;
    clientServices
    .crearCliente(nombre, email)
    .then(() => {
        window.location.href = '../screens/registro_completado.html';
    })
    .catch((err) => console.log(err));
});

