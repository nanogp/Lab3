function Saludar() {
    //window.alert("hola viteh");
    //document. puntero al documento que lo llama
    document.getElementById("p1").innerHTML = "<h1>hola viteh</h1>";
    console.log("escribo en consola");
    var variable;

    variable = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum porro eligendi quasi rem odit. Velit minima, a quae omnis excepturi officia reiciendis quasi sint praesentium eius unde sunt culpa blanditiis!"

    console.log(variable);

    variable = false;

    if (variable) {
        console.log(variable);
        console.log("SI");
    }
    else {
        console.log(variable);
        console.log("NO");
    }

    /*
    para evitar bardo con tipos de dato primitivos y sus metodos cambiantes
    al reutilizar las variables lo que hago es usar wrappers
    creo la variable con el constructor del objeto nativo de js
    */

    //cadena
    var cadena = new String();
    console.log(typeof cadena);

    //arrays
    var arrayUno = new Array();
    var arrayDos = [];
    console.log(typeof arrayUno);
    console.log(typeof arrayDos);

    var fecha = new Date();
    console.log(typeof fecha);

    var f = function dameDiez() { return 10; }
    console.log(typeof f);

    var variableSinInicializar;
    console.log(typeof variableSinInicializar);

    var variableNula = null;
    console.log(typeof variableNula);

}

function unaFuncion(nombre) {
    alert("hola " + nombre);

    (function (nombre) { alert("hola " + nombre); })('Jaimito');

    var x = function (nombre) { alert("hola " + nombre); };

    x('pirulo');



}

