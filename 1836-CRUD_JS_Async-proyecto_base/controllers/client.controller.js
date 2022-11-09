import { clientServices } from '../../service/client-service.js'

console.log(clientServices);

//trabajar con toda la interacción entre el JS y el HTML

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

const table = document.querySelector('[data-table]'); //vincula table con elemento HTML para mostrar el contenido

//respuesta, cuando sale de la promesa se convierte en data -o cualquier nombre que le ponga-
clientServices.listaClientes().then((data) => {
    data.forEach((perfil) => { //recorre el array y crea líneas con perfil y mail
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea); //agrega lineas como elemento hijo a table
    });
}).catch((error) =>
    alert('Ocurrió un error'));