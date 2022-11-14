import { clientServices } from '../service/client-service.js'


//trabajar con toda la interacción entre el JS y el HTML

const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement('tr');
  //código HTML con backticks + ${variablesJS}
  const contenido =
    `<td class="td" data-td> 
    ${nombre} 
    </td>
    <td> ${email} </td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id='${id}'
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
  linea.innerHTML = contenido;
  const btn = linea.querySelector('button');
  btn.addEventListener('click', () => {
    const id = btn.id
    clientServices
    .eliminarCliente(id)
    .then((respuesta) => {
      console.log(respuesta)})
    .catch((err) => alert('Ocurrió un error'));
  });

  return linea;
};

const table = document.querySelector('[data-table]'); //vincula table con elemento HTML para mostrar el contenido

//respuesta, cuando sale de la promesa se convierte en data -o cualquier nombre que le ponga-
clientServices
.listaClientes()
.then((data) => {
  data.forEach(({ nombre, email, id }) => { //recorre el array y crea líneas con perfil y mail
    const nuevaLinea = crearNuevaLinea(nombre, email, id);
    table.appendChild(nuevaLinea); //agrega lineas como elemento hijo a table
  });
})
.catch((error) =>
  alert('Ocurrió un error'));

