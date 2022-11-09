//comunicación con el backend
const http = new XMLHttpRequest();

//Abrir http (método, url)
//CRUD - Métodos HTTP

http.open('GET', 'http://localhost:3000/profile');

http.send();

http.onload = () => {
    const data = http.response;
    console.log(data); //información del perfil
}

