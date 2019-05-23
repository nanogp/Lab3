//manejador de btnRun
window.addEventListener("load", manejarEventos, false);

function manejarEventos() {




    function btnRun() {
        var boton = document.getElementById("btnRun");
        boton.addEventListener("click", () => {
            var div = document.getElementById("idDiv");
            var enlace = document.createElement("a");
            var nodoTexto = document.createTextNode("Ir a google");

            console.log(enlace);

            enlace.appendChild(nodoTexto);

            enlace.setAttribute("href", "http://google.com");
            enlace.setAttribute("target", "_blank");
            enlace.setAttribute("id", "a1");
            // enlace.setAttribute("class", "red");
            enlace.classList.add("red");

            div.appendChild(enlace);

        }, false);
    }

    function btnBorra() {
        var boton = document.getElementById("btnBorra");
        boton.addEventListener("click", () => {
            var div = document.getElementById("idDiv");
            var nodoTexto = document.createTextNode("Ir a google");
            
            var enlace = document.getElementById("a1");
            enlace.classList.toggle("yellow");
            enlace.classList.toggle("red");

        }, false);
    }


    btnRun();
    btnBorra();
}

