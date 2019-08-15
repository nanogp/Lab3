//----------------------------------cargar array dependencias
var dependencias = [
    "./dist/Legisladores/eTipo.js",
    "./dist/Legisladores/Persona.js",
    "./dist/Legisladores/Legislador.js",
    "./dist/Forms.js",
    "./dist/App.js"
].forEach(url => {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
});