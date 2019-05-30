
window.addEventListener("load", manejarEventos, false);

function ponerSpinner() {
    var spinner = document.createElement("img");
    spinner.setAttribute("src", "img/kartkid.gif");
    spinner.setAttribute("alt", "SPINNER");
    return spinner;
}

function manejarEventos() {

    document.forms[0].addEventListener("submit", (e) => {
        e.preventDefault();//reemplazo el evento del submit por defecto
        manejarSubmit();
    }, false);

}

function manejarSubmit() {
    var info = document.getElementById("info");
    var urlDir = "http://localhost:3000/enviarDatos";
    var datos = [];

    datos["nombre"] = document.getElementById("txtNombre").value;
    datos["apellido"] = document.getElementById("txtApellido").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                info.innerHTML = xhr.responseText;
            }
        } else {
            info.appendChild(ponerSpinner());
        }
    };

    xhr.open("GET", urlDir + "?nombre=" + datos["nombre"] + "&apellido=" + datos["apellido"], true);
    xhr.send();
}