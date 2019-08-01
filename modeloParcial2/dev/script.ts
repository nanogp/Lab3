namespace Entidades {
    //----------------------------------cargar array dependencias
    var dependencias = [
        "./dist/Entidades/Enumerados.js",
        "./dist/Entidades/Animal.js",
        "./dist/Entidades/Mascota.js",
        "./dist/Entidades/App.js",
        "./dist/common.js"
    ].forEach(url => {
        var script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    });

    //------------------------------------------------------------------- manejadores
    $('document').ready(asignarManejadores);

    function asignarManejadores() {
        // Entidades.App. LimpiarLocalStorage();
        // Entidades.App.inicio();
    }
}