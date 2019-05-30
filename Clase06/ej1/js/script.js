//manejador de btnRun
window.addEventListener("load", manejarEventos, false);

function manejarEventos() {

    // console.log(personas);

    function btnRun() {
        var boton = document.getElementById("btnRun");
        boton.addEventListener("click", () => {
            var div = document.getElementById("info");
            var contenido = "";

            personas.forEach(p => {
                contenido.concat(p.toString());
            });


            div.innerHTML = contenido;

        }, false);
    }

    function btnBorra() {
        var boton = document.getElementById("btnBorra");
        boton.addEventListener("click", () => {
            var div = document.getElementById("info");
            div.innerHTML = "algo";


        }, false);
    }


    btnRun();
    btnBorra();
}

