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
        boton.addEventListener("click", () => {

            var div = document.getElementById("miDiv");

            var primerHijo = div.firstElementChild;
            console.log(primerHijo);

            var ultimoHijo = div.lastElementChild;
            console.log(ultimoHijo);

            var hermano = primerHijo.nextElementSibling;
            console.log(hermano);

            var hermanoNulo = ultimoHijo.nextElementSibling;
            console.log(hermanoNulo);

            /*while (primerHijo.nextElementSibling) {
                 console.log(primerHijo);
                 primerHijo = primerHijo.nextElementSibling;
             }*/

            for (let hh = primerHijo; hh; hh = hh.nextElementSibling) {
                console.log(hh);
            }

            console.log(primerHijo.childNodes[0]);

        }, false);
    }, false);


