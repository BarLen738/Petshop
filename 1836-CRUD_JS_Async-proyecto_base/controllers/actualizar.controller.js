import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');

const obtenerInformacion = async () => { //esperar la respuesta
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if (id == null) {
        window.location.href = '../screens/error.html';
    }

    const nombre = document.querySelector('[data-nombre]');
    const email = document.querySelector('[data-email]');

    try { //ejecutar respuesta
        const perfil = await clientServices.detalleCliente(id); //la respuesta que obtiene la asigna a la constante perfil
        if (perfil.nombre && perfil.email) {
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        } else {
            throw new error();
        }
    }
    catch (error) {
        window.location.href = '../screens/error.html'
    }
};

obtenerInformacion();

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); //prevenir el funcionamiento normal del formulario, para que no realice la petición al servidor
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    clientServices.actualizarCliente(nombre, email, id)
        .then(() => {
            window.location.href = '../screens/edicion_concluida.html';
        });
});