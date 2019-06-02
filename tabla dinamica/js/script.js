window.addEventListener("load", manejarEventos, false);

function manejarEventos() {
    document.getElementById("btnGetPersonas").addEventListener("click", traerPersonas, false);
}

function traerPersonas() {
    var divDelIndex = document.getElementById("info");

    var datos = {
        url: "http://localhost:3000/traerPersonas"
        , nombre: document.getElementById("txtNombre")
        , apellido: document.getElementById("txtApellido")
        , edad: document.getElementById("txtEdad")
    };

    var personas = [];

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {

                personas = JSON.parse(xhr.responseText);
                divDelIndex.innerHTML = "";
                TablaDinamica.crearTabla(divDelIndex, personas);

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

function personaToString(persona) {
    var retorno = "";
    for (var prop in persona) {
        retorno += "<b>" + prop + ":</b> " + persona[prop] + " | ";
    }

    return retorno.substr(0, retorno.length - (" | ".length));
}