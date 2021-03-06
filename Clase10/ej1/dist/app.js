"use strict";
//----------------------------------cargar array dependencias
var dependencias = [
    "./dist/Espacial/Destinos.js",
    "./dist/Espacial/Cohete.js",
    "./dist/Espacial/Nasa.js",
    "./dist/Espacial/Subsidiaria.js"
].forEach(function (url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
});
//----------------------------------manejadores
window.addEventListener("load", asignarManejadores, false);
//----------------------------------comenzar
function asignarManejadores() {
    var laNasa = new Espacial.Subsidiaria("john doe", 1945, "cnctct");
    var unCuete = new Espacial.Cohete("Apollo 11", 123456);
    laNasa.agregarCohete(unCuete);
    console.log("la subsidiaria:" + laNasa.nombre);
    laNasa.cohetes[0].despegar();
}
