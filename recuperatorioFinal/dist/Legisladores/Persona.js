"use strict";
var Legisladores;
(function (Legisladores) {
    var Persona = /** @class */ (function () {
        function Persona(id, nombre, edad, color, imagen) {
            if (id === void 0) { id = 0; }
            if (nombre === void 0) { nombre = ""; }
            if (edad === void 0) { edad = 0; }
            if (color === void 0) { color = ""; }
            if (imagen === void 0) { imagen = ""; }
            this.id = id;
            this.nombre = nombre;
            this.edad = edad;
            this.color = color;
            this.imagen = imagen;
        }
        return Persona;
    }());
    Legisladores.Persona = Persona;
})(Legisladores || (Legisladores = {}));
