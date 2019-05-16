/*
var cambiar = true;

window.addEventListener("load", iniciarManejadores, false);


function cambiarTexto(elPuntero) {
    if (cambiar) {
        elPuntero.target.innerHTML = "TEXTO MODIFICADO";
        cambiar = false;
    }
    else {
        elPuntero.target.innerHTML = "Este texto cambia al hacer click";
        cambiar = true;
    }
}

function iniciarManejadores() {
    parrafo = document.getElementById("p1");
    parrafo.addEventListener("click", cambiarTexto, false);
}
*/

window.addEventListener("load",
    () => {
        cambiar = true;
        parrafo = document.getElementById("p1");
        parrafo.addEventListener("click", (elPuntero) => {
            if (cambiar) {
                elPuntero.target.innerHTML = "TEXTO MODIFICADO";
                cambiar = false;
            }
            else {
                elPuntero.target.innerHTML = "Este texto cambia al hacer click";
                cambiar = true;
            }
        }, false);
    }, false);



