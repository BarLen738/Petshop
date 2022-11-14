//conexión con el backend 
//comunicar con el servidor, recibir la respuesta y generarla en JSON
const listaClientes = () =>
    fetch('http://localhost:3000/profile')
    .then(respuesta =>  //se abre la conexión con fetch a la url, por defecto usa el método GET, genera una promesa
        respuesta.json() //una vez que se completa, la recibe y la transforma a objeto JS
    );

    const crearCliente = (nombre, email) => {
        return fetch('http://localhost:3000/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre,
                email,
                id: uuid.v4(),
            }),
        });
    };

    const eliminarCliente = (id) => {
        return fetch(`http://localhost:3000/profile/${id}`, {
            method: 'DELETE',
        });
    };

    const detalleCliente = (id) => {
        return fetch(`http://localhost:3000/profile/${id}`)
        .then(respuesta => respuesta.json())
    }

    const actualizarCliente = (nombre, email, id) => {
        return fetch(`http://localhost:3000/profile/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre,
                email,
            }),
        })
        .then( respuesta => respuesta )
        .catch(err => console.log(err));
    };

    export const clientServices = {
        listaClientes, //llave - valor(función)
        crearCliente,
        eliminarCliente,
        detalleCliente,
        actualizarCliente,
    };