
window.addEventListener("load", manejarEventos, false);

function manejarEventos() {

    document.forms[0].addEventListener("submit", (e) => {
        e.preventDefault();//reemplazo el evento del submit por defecto
        manejarSubmit();
    }, false);
}

function manejarSubmit() {
    var divDelIndex = document.getElementById("info");

    var datos = {
        url: "http://localhost:3000/enviarDatos",
        nombre: encodeURIComponent(document.getElementById("txtNombre").value)
        , apellido: encodeURIComponent(document.getElementById("txtApellido").value)
    };

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                divDelIndex.innerHTML = this.responseText;
            }
        } else {
            divDelIndex.appendChild(ponerSpinner());
        }
    };

    xhr.open("POST", datos.url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("&nombre=" + datos.nombre + "&apellido=" + datos.apellido);
}

function ponerSpinner() {
    return document.createElement("img")
        .setAttribute("src", "img/kartkid.gif")
        .setAttribute("alt", "SPINNER");
}