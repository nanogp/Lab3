//manejador de btnRun
window.addEventListener("load",
    () => {
        cambiar = true;
        boton = document.getElementById("btnRun");
        boton.addEventListener("click", () => {

            let div = document.getElementById("idDiv");
            let parrafo = document.getElementById("p1");
            let nodoTexto = document.createTextNode("esto es un parrafo dinamico");

            parrafo.appendChild(nodoTexto);

            div.appendChild(parrafo);

        }, false);
    }, false);


