const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement('tr');
    //código HTML con backticks + ${variablesJS}
    const contenido =
        `<td class="td" data-td> ${nombre} </td>
    <td> ${email} </td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    linea.innerHTML = contenido;
    return linea;
};

const table = document.querySelector('[data-table]'); //vincula table con elemento HTML



//Abrir http (método, url)
//CRUD - Métodos HTTP

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => { //función asíncrona
        //comunicación con el backend
        const http = new XMLHttpRequest(); //generar petición 
        http.open('GET', 'http://localhost:3000/profile');

        http.send(); //envío de petición al servidor

        http.onload = () => { //cuando se ejecuta
            const response = JSON.parse(http.response); //http.response es un texto, lo convierte a JS -array-
            if (http.status >= 400) { //verificar el status de la llamada, en este caso significa error que dé mayor o igual a 400
                reject (response);
            } else { //no ocurrió error, ejecutar respuesta
                resolve (response);
            }
        };
    });

    return promise
};

//response, cuando sale de la promesa se convierte en data -o cualquier nombre que le ponga-
listaClientes().then((data) => {
    data.forEach((perfil) => { //recorre el array y crea líneas con perfil y mail
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea); //agrega lineas como elemento hijo a table
    });
}).catch((error) => 
    alert('Ocurrió un error'));


