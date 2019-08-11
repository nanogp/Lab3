"use strict";
//----------------------------------cargar array dependencias
var dependencias = [
    "./dist/Heroes/eTipo.js",
    "./dist/Heroes/Personaje.js",
    "./dist/Heroes/SuperHeroe.js",
    "./dist/Forms.js",
    "./dist/App.js"
].forEach(function (url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
});
