//manejador X
/*
window.addEventListener("load",
    () => {
        cambiar = true;
        parrafo = document.getElementById("");
        parrafo.addEventListener("click", (parametro) => {


            
        }, false);
    }, false);
*/

//manejador de btnRun
window.addEventListener("load",
    () => {
        cambiar = true;
        boton = document.getElementById("btnRun");
        boton.addEventListener("click", () => {

            var parrafo = document.getElementsByTagName('p')[0];

            console.log(parrafo);

            var padre = parrafo.parentNode;

            console.log(padre);

            padre.style.backgroundColor = "blue";

        }, false);
    }, false);

