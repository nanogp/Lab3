//window.addEventListener("load", manejarEventos, false);
$(document).ready(manejarEventos);

function manejarEventos() {
    document.getElementById("btnGetPersonas").addEventListener("click", manejarTraerPersonas, false);
    document.forms[0].addEventListener("submit", manejarSubmitAlta, false);
    document.forms[1].addEventListener("submit", manejarSubmitModificacion, false);
}

/////////////////////////////////////////////////////* LISTAR */
function manejarTraerPersonas(e) {
    e.preventDefault();
    traerPersonasJQ(newPersona(this));
}

function traerPersonasJQ() {
    var parametros = {
        url: "http://localhost:3000/traerPersonas",
        divDelIndex: document.getElementById("info")
    };


    console.log(parametros.divDelIndex);

    $.get(parametros.url, function (data, status) {
        console.log(data);
        console.log(status);
        var response = []; //ya se que devuelve un array de personas
        response = JSON.parse(data);
        parametros.divDelIndex.innerHTML = "";//saco el spinner
        TablaDinamica.crearTabla(parametros.divDelIndex, response);
    });
}

/////////////////////////////////////////////////////* ALTA */
function manejarSubmitAlta(e) {
    e.preventDefault();
    agregarPersonaJQ(newPersona(this));
}

function agregarPersonaJQ(persona) {

    var parametros = {
        url: "http://localhost:3000/altaPersona",
        divDelIndex: $("info"),
        feedbackEnIndex:
        {
            id: document.getElementById("id"),
            nombre: document.getElementById("nombre"),
            apellido: document.getElementById("apellido"),
            edad: document.getElementById("edad")
        }
    };

    $.ajax(
        {
            url: parametros.url,
            contentType: 'application/json',
            type: "POST",
            data: JSON.stringify(persona),
            beforSend: function (params) {
                //$("#tdSpin").spin({redius: 3, width 3, height: 2, length 4});
            },
            success: function (info) {
                response = JSON.parse(info);
                console.log(response);
                console.log(parametros.feedbackEnIndex.id);
                console.log(parametros.feedbackEnIndex.id.value);

                parametros.feedbackEnIndex.id.value = response.id;
                parametros.feedbackEnIndex.nombre.value = response.nombre;
                parametros.feedbackEnIndex.apellido.value = response.apellido;
                parametros.feedbackEnIndex.edad.value = response.edad;
                traerPersonasJQ(); //para listar luego del alta
            }, error: function (xhr, estado, error) {
                console.log(estado);
                console.log(error);
            }, complete: function (xhr, estado) {
                console.log(xhr);
                console.log(estado);
                parametros.divDelIndex.innerHTML = "";//saco el spinner
            }, timeout: 10000
        }
    );
}

function newPersona() {
    return persona = {
        nombre: document.getElementById("txtNombre").value,
        apellido: document.getElementById("txtApellido").value,
        edad: document.getElementById("txtEdad").value
    };
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

                traerPersonasJQ(); //para listar luego de modificar
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