window.addEventListener("load", manejarEventos, false);

function manejarEventos() {
    document.getElementById("btnGetPersonas").addEventListener("click", traerPersonas, false);
    document.forms[0].addEventListener("submit", manejarSubmitAlta, false);
    document.forms[1].addEventListener("submit", manejarSubmitModificacion, false);

}

/////////////////////////////////////////////////////* LISTAR */
function manejarTraerPersonas(e) {
    e.preventDefault();
    agregarPersona(newPersona(this));
}

function traerPersonas() {

    //parametros
    var parametros = {
        xhr: new XMLHttpRequest(),
        url: "http://localhost:3000/traerPersonas",
        divDelIndex: document.getElementById("info")
    };

    //manejador de evento
    parametros.xhr.onreadystatechange = function () {
        if (parametros.xhr.readyState == XMLHttpRequest.DONE) {
            if (parametros.xhr.status == 200) {

                var response = []; //ya se que devuelve un array de personas
                response = JSON.parse(parametros.xhr.responseText);
                parametros.divDelIndex.innerHTML = "";//saco el spinner
                TablaDinamica.crearTabla(parametros.divDelIndex, response);

            }
        } else {
            parametros.divDelIndex.appendChild(ponerSpinner());
        }
    };

    //request
    parametros.xhr.open("GET", parametros.url, true);
    parametros.xhr.send();
}

/////////////////////////////////////////////////////* ALTA */
function manejarSubmitAlta(e) {
    e.preventDefault();
    agregarPersona(newPersona(this));
}

function newPersona() {
    return persona = {
        nombre: document.getElementById("txtNombre").value,
        apellido: document.getElementById("txtApellido").value,
        edad: document.getElementById("txtEdad").value
    };
}

function agregarPersona(persona) {

    var parametros = {
        xhr: new XMLHttpRequest(),
        url: "http://localhost:3000/altaPersona",
        divDelIndex: document.getElementById("info"),
        feedbackEnIndex:
        {
            id: document.getElementById("id"),
            nombre: document.getElementById("nombre"),
            apellido: document.getElementById("apellido"),
            edad: document.getElementById("txtEdad")
        }
    };

    parametros.xhr.onreadystatechange = function () {
        if (parametros.xhr.readyState == XMLHttpRequest.DONE) {
            if (parametros.xhr.status == 200) {

                var response = JSON.parse(parametros.xhr.responseText);

                parametros.divDelIndex.innerHTML = "";//saco el spinner
                parametros.feedbackEnIndex.id.value = response.id;
                parametros.feedbackEnIndex.nombre.value = response.nombre;
                parametros.feedbackEnIndex.apellido.value = response.apellido;
                parametros.feedbackEnIndex.edad.value = response.edad;

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


/////////////////////////////////////////////////////* MODIFICACION */

function manejarSubmitModificacion(e) {
    e.preventDefault();
    modificarPersona(modPersona(this));
}

function modPersona() {
    return persona = {
        id: document.getElementById("txtIdM").value,
        nombre: document.getElementById("txtNombreM").value,
        apellido: document.getElementById("txtApellidoM").value,
        edad: document.getElementById("txtEdadM").value
    };
}


function modificarPersona(persona) {

    var parametros = {
        xhr: new XMLHttpRequest(),
        url: "http://localhost:3000/modificarPersona",
        divDelIndex: document.getElementById("info"),
        feedbackEnIndex: {
            id: document.getElementById("id"),
            nombre: document.getElementById("nombre"),
            apellido: document.getElementById("apellido"),
            edad: document.getElementById("edad")
        }
    };

    parametros.xhr.onreadystatechange = function () {
        if (parametros.xhr.readyState == XMLHttpRequest.DONE) {
            if (parametros.xhr.status == 200) {

                var response = JSON.parse(parametros.xhr.responseText);

                parametros.divDelIndex.innerHTML = "";//saco el spinner
                parametros.feedbackEnIndex.id.value = persona.id;
                parametros.feedbackEnIndex.nombre.value = persona.nombre;
                parametros.feedbackEnIndex.apellido.value = persona.apellido;
                parametros.feedbackEnIndex.edad.value = persona.edad;

                traerPersonas(); //para listar luego de modificar
            }
        } else {
            parametros.divDelIndex.appendChild(ponerSpinner());
        }
    };

    parametros.xhr.open("POST", parametros.url, true);
    parametros.xhr.setRequestHeader("Content-Type", "application/json");
    parametros.xhr.send(JSON.stringify(persona));
}


/////////////////////////////////////////////////////* OTROS */

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