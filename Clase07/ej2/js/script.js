window.addEventListener("load", manejarEventos, false);

function manejarEventos() {
    document.forms[0].addEventListener("submit", manejarSubmit, false);
    document.getElementById("btnGetPersonas").addEventListener("click", traerPersonas, false);

}

function manejarSubmit(e) {
    e.preventDefault();
    agregarPersona(newPersona(this));
}

function manejarTraerPersonas(e) {
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

    var parametros = {
        xhr: new XMLHttpRequest(),
        url: "http://localhost:3000/altaPersona",
        divDelIndex: document.getElementById("info"),
        id: document.getElementById("id"),
        nombre: document.getElementById("nombre"),
        apellido: document.getElementById("apellido")
    };

    var responsePersona;

    parametros.xhr.onreadystatechange = function () {
        if (parametros.xhr.readyState == XMLHttpRequest.DONE) {
            if (parametros.xhr.status == 200) {

                responsePersona = JSON.parse(parametros.xhr.responseText);

                parametros.divDelIndex.innerHTML = "";
                parametros.id.value = responsePersona.id;
                parametros.nombre.value = responsePersona.nombre;
                parametros.apellido.value = responsePersona.apellido;

                traerPersonas(); //para listar luego del alta
            }
        } else {
            parametros.divDelIndex.appendChild(ponerSpinner());
        }
    };

    parametros.xhr.open("POST", parametros.url, true);
    parametros.xhr.setRequestHeader("Content-Type", "application/json");
    parametros.xhr.send(JSON.stringify(persona));
}


function traerPersonas() {

    var parametros = {
        xhr: new XMLHttpRequest(),
        url: "http://localhost:3000/traerPersonasArray",
        divDelIndex: document.getElementById("info"),
        nombre: document.getElementById("txtNombre"),
        apellido: document.getElementById("txtApellido"),
        edad: document.getElementById("txtEdad")
    };

    var personas = [];

    parametros.xhr.onreadystatechange = function () {
        if (parametros.xhr.readyState == XMLHttpRequest.DONE) {
            if (parametros.xhr.status == 200) {

                personas = JSON.parse(parametros.xhr.responseText);
                parametros.divDelIndex.innerHTML = "";
                TablaDinamica.crearTabla(parametros.divDelIndex, personas);
                /* for (var i in personas) {divDelIndex.innerHTML += "<p>" + personaToString(personas[i]) + "</p>";} */
            }
        } else {
            parametros.divDelIndex.appendChild(ponerSpinner());
        }
    };

    parametros.xhr.open("GET", parametros.url, true);
    parametros.xhr.send();
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