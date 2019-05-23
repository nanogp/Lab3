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
window.addEventListener("load",
    () => {
        cambiar = true;
        boton = document.getElementById("btnRun");
        boton.addEventListener("click", (elPuntero) => {

            var lista = document.getElementById("lista");
            // console.log("hijos de todo tipo:" + lista.childNodes.length);
            console.log("hijos de tipo elemento:" + lista.children.length);

            // for (let i = 0; i < lista.children.length; i++) {
            //     console.log(lista.children[i]);
            // }

            for (let i = 0; i < lista.childNodes.length; i++) {
                console.log(lista.childNodes[i]);
            }


        }, false);
    }, false);

