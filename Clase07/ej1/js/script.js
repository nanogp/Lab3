window.addEventListener("load", manejarEventos, false);

function manejarEventos() {
    document.forms[0].addEventListener("submit", manejarSubmit, false);
}

function manejarSubmit(e) {
    e.preventDefault();
    agregarPersona(newPersona(this));
}

function newPersona() {
    return persona = {
        nombre: document.getElementById("txtNombre").value,
        apellido: document.getElementById("txtApellido").value
    };
}

function agregarPersona(persona) {

    var divDelIndex = document.getElementById("info");

    var parametros = {
        url: "http://localhost:3000/altaPersona",
        id: document.getElementById("id"),
        nombre: document.getElementById("nombre"),
        apellido: document.getElementById("apellido")
    };

    var responsePersona;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                responsePersona = JSON.parse(xhr.responseText);

                divDelIndex.innerHTML = "";

                parametros.id.value = responsePersona.id;
                parametros.nombre.value = responsePersona.nombre;
                parametros.apellido.value = responsePersona.apellido;
            }
        } else {
            divDelIndex.appendChild(ponerSpinner());
        }
    };

    xhr.open("POST", parametros.url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(persona));
}

function ponerSpinner() {
    var spinner = document.createElement("img");
    spinner.setAttribute("src", "img/kartkid.gif");
    spinner.setAttribute("alt", "SPINNER");
    return spinner;
}

function personaToString(persona) {
    var retorno = "";
    for (var prop in persona) {
        retorno += "<b>" + prop + ":</b> " + persona[prop] + " | ";
    }

    return retorno.substr(0, retorno.length - (" | ".length));
}