/*
var formulario;

window.addEventListener("load", initEventos);

function initEventos() {
    formulario = document.forms[0];
    formulario.addEventListener('submit', manejarSubmit)
}

function manejarSubmit(e) {
    e.preventDefault(); //reemplaza evento default
    alert("funciona?");
}
*/


/*
window.addEventListener("load", initEventos);

function initEventos() {
    //formulario = document.getElementsByTagName('form')[0];

    document.forms[0].addEventListener('submit', function (e) {
        e.preventDefault(); //reemplaza evento default
        alert("funciona?");
    })
}
*/

window.addEventListener("load", function () {
    document.forms[0].addEventListener('submit', function (e) {
        e.preventDefault();
        var informacion = "";
        informacion += "Nombre: " + document.getElementById("txtNombre").value + "<br>";
        informacion += "Password: " + document.getElementById("txtPassword").value;

        if (document.getElementById("chkcss").checked) {
            informacion += "<br> Sabe Css";
        }
        else {
            informacion += "<br> No sabe Css";
        }

        if (document.getElementById("chkjs").checked) {
            informacion += "<br> Sabe javascript";
        }
        else {
            informacion += "<br> No sabe javascript";
        }

        if (document.getElementById("chkhtml").checked) {
            informacion += "<br> Sabe Html";
        }
        else {
            informacion += "<br> No sabe Html";
        }

        if (document.getElementById("rdoMasculino").checked) {
            informacion += "<br>Sexo: " + document.getElementById("rdoMasculino").value;
        }
        else {
            informacion += "<br>Sexo: " + document.getElementById("rdoFemenino").value;
        }

        document.getElementById("infoDelLogin").innerHTML = informacion;
    });
});

