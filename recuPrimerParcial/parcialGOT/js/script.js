//------------------------------------------------------------------- INICIO
window.addEventListener('load', asignarManejadores, false);

//------------------------------------------------------------------- FUNCION PARA CARGAR SCRIPTS EN TIEMPO DE EJECUCION
function cargarScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

//------------------------------------------------------------------- DEPENDENCIAS
cargarScript("./js/forms.js"); //#EDITAR
cargarScript("./js/datosGOT.js"); //#EDITAR

//------------------------------------------------------------------- MANEJADOR DE EVENTOS
function asignarManejadores() {
    traerPersonajes();
}

function volverInicio() {
    asignarManejadores();
}

//------------------------------------------------------------------- LISTAR
function traerPersonajes() {
    var spinner = document.getElementById('spinner');
    var info = document.getElementById('info');
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                response = JSON.parse(xhr.responseText);
                response.sort(sortById);
                info.innerHTML = " ";
                spinner.innerHTML = "";
                crearTabla(response);
            } else {
                spinner.innerHTML = " ";
                console.log("error: " + xhr.status);
            }
        } else {
            spinner.appendChild(ponerSpinner());
        }

    };

    xhr.open('GET', 'http://localhost:3000/traerPersonajes', true);
    xhr.send();
}

//------------------------------------------------------------------- ALTA
function altaPersonaje() {
    var persona = newPersonaje(false);
    var info = document.getElementById('info');
    var spinner = document.getElementById('spinner');
    var response;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                response = JSON.parse(xhr.responseText);
                for (var key in response) {
                    crearFormulario(key, response[key]);
                }
                info.innerHTML = "";
                spinner.innerHTML = "";
                traerPersonajes();
            } else {
                console.log("error: " + xhr.status);
            }
        } else {
            spinner.appendChild(ponerSpinner());
        }
    };

    xhr.open('POST', 'http://localhost:3000/altaPersonaje', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));
}

//------------------------------------------------------------------- BAJA

function bajaPersonaje(persona) {
    var info = document.getElementById('info');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                info.innerHTML = "";
                volverInicio();
            } else {
                console.log("error: " + xhr.status);
            }
        } else {
            info.appendChild(ponerSpinner());
        }
    };

    xhr.open('POST', 'http://localhost:3000/bajaPersonaje', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));
}


//------------------------------------------------------------------- MODIFICACION

function modificarPersonaje(persona) {
    var info = document.getElementById('info');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                info.innerHTML = "";
                volverInicio();
            } else {
                console.log("error: " + xhr.status);
            }
        } else {
            info.appendChild(ponerSpinner());
        }
    };

    xhr.open('POST', 'http://localhost:3000/modificarPersonaje', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));
}

//------------------------------------------------------------------- OTROS

function ponerSpinner() {
    var spinner = document.createElement("img");
    spinner.setAttribute("src", "imagenes/kartkid.gif");
    spinner.setAttribute('class', 'spinner');
    spinner.setAttribute("alt", "SPINNER");
    return spinner;
}
