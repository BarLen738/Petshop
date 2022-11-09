//conexión con el backend 
//comunicar con el servidor, recibir la respuesta y generarla en JSON
const listaClientes = () =>
    fetch('http://localhost:3000/profile').then(respuesta =>  //se abre la conexión con fetch a la url, por defecto usa el método GET, genera una promesa
        respuesta.json() //una vez que se completa, la recibe y la transforma a objeto JS
    );

    export const clientServices = {
        listaClientes, //llave - valor(función)
    };