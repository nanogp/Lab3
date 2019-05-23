//manejador X
/*
window.addEventListener("load",
    () => {
        cambiar = true;
        parrafo = document.getElementById("");
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
    */

//manejador de btnRun
window.addEventListener("load", manejadorDeEventos, false);


function manejadorDeEventos() {
    var contador = 0;
    console.log(contador);
    
    function btnRun() {
        var boton = document.getElementById("btnRun");
        boton.addEventListener("click", () => {
            var parrafo = document.getElementById("p1");
            var nodoTexto = document.createTextNode("hola mundo " + contador);

            parrafo.appendChild(nodoTexto);

            contador++;

        }, false);
    }

    function btnBorra() {
        var boton = document.getElementById("btnBorra");
        boton.addEventListener("click", () => {
            var parrafo = document.getElementById("p1");

            parrafo.removeChild(parrafo.firstChild);

            contador--;

        }, false);
    }


    btnRun();
    btnBorra();
}