
window.addEventListener("load", manejarEventos, false);

function manejarEventos() {
    document.getElementById("btnGetPersona").addEventListener("click", traerPersona, false);
}

function traerPersona() {
    var divDelIndex = document.getElementById("info");

    var datos = {
        url: "http://localhost:3000/traerJSON"
        , nombre: document.getElementById("txtNombre")
        , apellido: document.getElementById("txtApellido")
        , edad: document.getElementById("txtEdad")
    };

    var persona;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {

                persona = JSON.parse(xhr.responseText);

                datos.nombre.value = persona.nombre;
                datos.apellido.value = persona.apellido;
                datos.edad.value = persona.edad;
                divDelIndex.innerHTML = null;

            }
        } else {
            divDelIndex.appendChild(ponerSpinner());
        }
    };

    xhr.open("GET", datos.url, true);
    xhr.send();
}

function ponerSpinner() {
    var spinner = document.createElement("img");
    spinner.setAttribute("src", "img/kartkid.gif");
    spinner.setAttribute("alt", "SPINNER");
    return spinner;
}