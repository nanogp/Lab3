//manejador de btnRun
window.addEventListener("load", manejarEventos, false);

function manejarEventos() {

    // console.log(personas);

    function btnRun() {
        var boton = document.getElementById("btnRun");
        boton.addEventListener("click", () => {
            var div = document.getElementById("info");

            personas.forEach(p => {
                console.log(p);
            });

        }, false);
    }

    function btnBorra() {
        var boton = document.getElementById("btnBorra");
        boton.addEventListener("click", () => {
            var div = document.getElementById("info");
            var nodoTexto = document.createTextNode("Ir a google");



        }, false);
    }


    btnRun();
    btnBorra();
}

